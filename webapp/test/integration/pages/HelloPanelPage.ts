import Press from "sap/ui/test/actions/Press";
import Opa5 from "sap/ui/test/Opa5";

const viewName = "ui5.walkthrough.view.HelloPanel";

export default class HelloPanelPage extends Opa5 {
    iPressTheSayHelloWithDialogButton() {
        return this.waitFor({
            id: "helloDialogButton",
            viewName,
            actions: new Press(),
            errorMessage: "Did not find the 'Say hello with Dialog' button on the HelloPanel view",
        });
    }

    iShouldSeeTheHelloDialog() {
        return this.waitFor({
            controlType: "sap.m.Dialog",
            success: () => Opa5.assert.ok(true, "The dialog is open"),
            errorMessage: "Did not find the dialog control",
        });
    }
}
