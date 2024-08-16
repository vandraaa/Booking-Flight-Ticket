import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY!!;

const supabase = createClient(supabaseUrl, supabaseKey);

export const uploadFile = async (file: File) => {
  try {
    const filename = `${Date.now()}-${file.name}`;
    const { data, error } = await supabase.storage
      .from("ImageUpload")
      .upload(`public/airplanes/${filename}`, file, {
        cacheControl: "3600",
        upsert: false,
      });

      if(error) {
        throw new Error(error.message);
      }

      return filename;
  } catch (err) {
    console.log(err);

    return err
  }
};

export const getUrlFile = (filename: string) => {
  const {data} = supabase.storage.from("ImageUpload").getPublicUrl(`public/airplanes/${filename}`);
  return data.publicUrl
}
