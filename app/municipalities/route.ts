
export async function GET() {
    const response = await fetch('https://api.carrismetropolitana.pt/municipalities');
    const data = await response.json();
    return Response.json(data);
}
