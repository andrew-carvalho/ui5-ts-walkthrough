import Controller from "sap/ui/core/mvc/Controller";
import JSONModel from "sap/ui/model/json/JSONModel";

/**
 * @name ui5.walkthrough.controller.InvoiceList
 */
export default class InvoiceList extends Controller {
    onInit(): void | undefined {
        const viewModel = new JSONModel({
            currency: "EUR"
        });

        this.getView()?.setModel(viewModel, "view");
    }
}
