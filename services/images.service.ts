import { createClient } from '@/utils/supabase/client';



export const AddImage = async (file: File) => {
    const supabase = createClient();
    const { data, error } = await supabase.storage
        .from("ImageBucket")
        .upload("public" + file?.name, file as File);

    if (data) {
        console.log(data);
        return console.log("Upload Successful");
    } else if (error) {
        console.log(error);
    }
}


export const GetImageByName = async (name: string) => {
    const supabase = createClient();
    const { data } = supabase
        .storage
        .from('ImageBucket')
        .getPublicUrl(name)

    if (data) {
        console.log(data.publicUrl);
        return data.publicUrl;
    }

}

export const UpdateImage = async (name: string, file: File) => {
    const supabase = createClient();
    //const avatarFile = event.target.files[0]
    const { data, error } = await supabase
        .storage
        .from('ImageBucket')
        .update(name, file, {
            cacheControl: '3600',
            upsert: true
        })

        if (data) {
            console.log(data);
            return console.log("Update Successful");
        } else if (error) {
            console.log(error);
        }
}

export const DeleteImage = async (name: string) => {
    const supabase = createClient();
    const { data, error } = await supabase
        .storage
        .from('ImageBucket')
        .remove([name])

        if (data) {
            console.log(data);
            return console.log("Delete Successful");
        } else if (error) {
            console.log(error);
        }
}