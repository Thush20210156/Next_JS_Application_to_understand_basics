export default function Docs({params}: {params: {slugs: string[]}}) {

    if (params.slugs?.length === 2) {

        return (
            <div>
                <h1 className="">Viewing docs for {params.slugs[0]} and concept {params.slugs[1]}</h1>
            </div>
        );
    } else if (params.slugs?.length === 1) {


        return (
            <div>
                <h1 className="">Viewing docs for feature {params.slugs[0]}</h1>
            </div>
        );
    }
  return (
    <div>
      <h1 className="">Docs Home Page</h1>
    </div>
  );
}