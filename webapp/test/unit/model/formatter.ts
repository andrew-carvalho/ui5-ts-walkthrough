import Controller from "sap/ui/core/mvc/Controller";
import ResourceModel from "sap/ui/model/resource/ResourceModel";
import formatter from "ui5/walkthrough/model/formatter";

QUnit.module("Formatting function", {});

QUnit.test("Should return the translated texts", (asserts) => {
    const resourceModel = new ResourceModel({
        bundleUrl: sap.ui.require.toUrl("ui5/walkthrough/i18n/i18n.properties"),
        supportedLocales: [""],
        fallbackLocale: "",
    });

    const controllerMock = {
        getOwnerComponent() {
            return {
                getModel() {
                    return resourceModel;
                },
            };
        },
    } as any as Controller;

    const fnIsolatedFormatter = formatter.statusText.bind(controllerMock);

    asserts.strictEqual(fnIsolatedFormatter("A"), "New", "The long text for status A is correct");
    asserts.strictEqual(fnIsolatedFormatter("B"), "In Progress", "The long text for status B is correct");
    asserts.strictEqual(fnIsolatedFormatter("C"), "Done", "The long text for status C is correct");
});
