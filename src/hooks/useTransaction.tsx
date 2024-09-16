"use client"

import { User } from "lucia";
import useCheckoutData from "./useCheckoutData";
import { useMemo, useState } from "react";
import { SEAT_VALUE } from "@/app/(home)/flights/components/filter-class";
import { SeatValuesType } from "@/lib/utils";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

type Props = {
    user: User | null;
}

const useTransaction = ({user}: Props) => {
    const data = useCheckoutData().data;

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const router = useRouter();

    const selectedSeat = useMemo(() => {
        return SEAT_VALUE[(data?.seat as SeatValuesType) ?? "ECONOMY"];
      }, [data?.seat]);

    const transactionMutate = useMutation({
        mutationFn: (data: unknown) => axios.post('/api/transaction/create', data).then((res) => res.data),
    })

    const payTrx = async () => {

        if (!data && !user) {
            return null
        }

        const seatDetail = data?.seatDetail as { price: number } | undefined;
        const price = Number((seatDetail?.price ?? 0) + selectedSeat.additionalPrice);

        const bodyData = {
            bookingDate: new Date(),
            price,
            flightId: data?.flightDetail?.id,
            seatId: data?.seatDetail?.id,
            tokenMidtrans: "",
            departureCityCode: data?.flightDetail.departureCityCode,
            destinationCityCode: data?.flightDetail.destinationCityCode,
        };
        

        try {
            setIsLoading(true)
            const transaction = await transactionMutate.mutateAsync(bodyData);

            // handle midtrans
            window.snap.pay(transaction.midtrans.token, {
                onSuccess: function(result: any){
                  Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'Payment success!'
                  })
                  router.push('/success-checkout')
                },
                onPending: function(result: any){
                  Swal.fire({
                    icon: 'info',
                    title: 'Pending',
                    text: 'Payment pending!'
                  })
                  router.push('/success-checkout')
                },
                onError: function(result: any){
                  Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Payment failed! Please Try Again'
                  })
                },
                onClose: function(){
                  Swal.fire({
                    icon: 'info',
                    title: 'Info',
                    text: 'Payment failed! Please Try Again'
                  })
                }
              })
            // handle midtrans

            setIsLoading(false)
        } catch (err) {
            setIsLoading(false)
            console.log(err)
        }
    }

    return {
        payTrx, 
        isLoading
    }
}

export default useTransaction