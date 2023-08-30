import { Fragment } from "react";

export function DynComponent({ useComp }) {
  const comp = useComp();

  return <Fragment>{comp}</Fragment>;
}
