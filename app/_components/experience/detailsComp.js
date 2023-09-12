import Link from "next/link";
export default function DetailsComp(props) {
  return (
    <>
      <div className="text-highlights">
        <h1 className="defaultFont text-3xl font-bold lg:text-right md:text-right">
          {props.title}
        </h1>
      </div>
      <div className="text-white pb-5 subFont">
        <h1 className="company">
          <Link
            href={props.website}
            className="underline font-bold"
            target={"_blank"}
          >
            {props.company}
          </Link>{" "}
          - <span className="font-xs">{props.type}</span>
        </h1>
        <h4 className="date">{props.date}</h4>
        <h2 className="font-bold">Roles and Responsibilities:</h2>
        <div className="responsibilities">
          {props.roles.map((val) => {
            return <li>{val}</li>;
          })}
        </div>
        <h2 className="font-bold">Technology Used:</h2>
        <li>{props.tech}</li>
      </div>
    </>
  );
}
