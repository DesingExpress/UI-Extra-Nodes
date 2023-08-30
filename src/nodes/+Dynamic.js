import { ImPure } from "@design-express/fabrica";
import { DynComponent } from "../components/Dynamic";
import { useEffect, useState } from "react";

export class Dynamic extends ImPure {
  static path = "UI/Extra";
  static title = "Dynamic";
  static description = "Dynamic Component";

  constructor() {
    super({ in: false, out: false, mode: 0 });
    this.addInput("toUpdate", -1);
    this.addInput("component", "component");
    this.addOutput("component", "component");
    this._dynComp = () => this.getInputData(2);

    const that = this;
    this._useComp = function useComp(val) {
      const [state, setState] = useState();
      useEffect(() => {
        setState(that._dynComp());
        return () => {};
      }, []);
      return state;
    };
  }

  onExecute() {
    this.setOutputData(1, <DynComponent useComp={this._useComp} />);
  }
  onAction() {}
}
