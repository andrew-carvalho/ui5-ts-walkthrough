import Controller from "sap/ui/core/mvc/Controller";
import History from "sap/ui/core/routing/History";
import Route, { Route$PatternMatchedEvent } from "sap/ui/core/routing/Route";
import UIComponent from "sap/ui/core/UIComponent";

export default class Detail extends Controller {
    onInit(): void {
        const router = UIComponent.getRouterFor(this);
        (router.getRoute("detail") as Route).attachPatternMatched(this.onObjectMatched, this);
    }

    onObjectMatched(event: Route$PatternMatchedEvent): void {
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
}
