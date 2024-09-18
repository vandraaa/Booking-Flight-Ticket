"use client"

import { User } from "lucia";
import useCheckoutData from "./useCheckoutData";
import { useMemo, useState } from "react";
import { SEAT_VALUE } from "@/app/(home)/flights/components/filter-class";
import { SeatValuesType } from "@/lib/utils";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
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

        const price = data
        ? data?.flightDetail.price + selectedSeat.additionalPrice
        : 0;
        const insurance = price ? price * 0.24 : 0;
        const total = price ? price + insurance + 200000 : 0;

        const bodyData = {
            bookingDate: new Date(),
            price: total,
            flightId: data?.flightDetail?.id,
            seatId: data?.seatDetail?.id,
            departureCityCode: data?.flightDetail.departureCityCode,
            destinationCityCode: data?.flightDetail.destinationCityCode,
        };
        

        try {
            setIsLoading(true)
            const transaction = await transactionMutate.mutateAsync(bodyData);

            // handle midtrans
            window.snap.pay(transaction.midtrans.token, {
                onSuccess: function(result: unknown){
                  console.log(result)
                  router.push('/success-checkout')
                },
                onPending: function(result: unknown){
                  console.log(result)
                  router.push('/success-checkout')
                },
                onError: function(result: unknown){
                  console.log(result)
                },
                onClose: function(result: unknown){
                  console.log(result)
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