import opaTest from "sap/ui/test/opaQunit";
import HelloPanelPage from "./pages/HelloPanelPage";

const onTheHelloPanelPage = new HelloPanelPage();

QUnit.module("navigation");

opaTest("Should open the Hello Dialog", () => {
    onTheHelloPanelPage.iStartMyUIComponent({ componentConfig: { name: "ui5.walkthrough" } });
    onTheHelloPanelPage.iPressTheSayHelloWithDialogButton();
    onTheHelloPanelPage.iShouldSeeTheHelloDialog();
    onTheHelloPanelPage.iTeardownMyApp();
});
