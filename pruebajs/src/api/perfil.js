export async function getDatosApi(){
    const response = await fetch('https://bestcycling-public.s3.eu-west-1.amazonaws.com/api-test/db.json');
    const data = await response.json();

    return data;
}
