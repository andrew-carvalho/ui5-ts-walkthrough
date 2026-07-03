import Controller from "sap/ui/core/mvc/Controller";
import History from "sap/ui/core/routing/History";
import Route, { Route$PatternMatchedEvent } from "sap/ui/core/routing/Route";
import UIComponent from "sap/ui/core/UIComponent";
import ProductRating, { ProductRating$ChangeEvent } from "../control/ProductRating";
import ResourceModel from "sap/ui/model/resource/ResourceModel";
import ResourceBundle from "sap/base/i18n/ResourceBundle";
import MessageToast from "sap/m/MessageToast";

export default class Detail extends Controller {
    onInit(): void {
        const router = UIComponent.getRouterFor(this);
        (router.getRoute("detail") as Route).attachPatternMatched(this.onObjectMatched, this);
    }

    onObjectMatched(event: Route$PatternMatchedEvent): void {
        (this.byId("rating") as ProductRating).reset();
        this.getView()?.bindElement({
            path: "/" + window.decodeURIComponent((event.getParameter("arguments") as any).invoicePath),
            model: "invoice",
        });
    }

    onNavBack(): void {
        const history = History.getInstance();
        const previousPageHash = history.getPreviousHash();

        if (previousPageHash) {
            window.history.go(-1);
            return;
        }

        const router = UIComponent.getRouterFor(this);
        router.navTo("overview");
    }

    onRatingChange(event: ProductRating$ChangeEvent): void {
        const value = event.getParameter("value");
        const resourceBundle = (
            this?.getView()?.getModel("i18n") as ResourceModel
        )?.getResourceBundle() as ResourceBundle;

        MessageToast.show(resourceBundle.getText("ratingConfirmation", [value]) as string);
    }
}
