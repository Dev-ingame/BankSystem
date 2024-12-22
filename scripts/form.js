import { Player } from "@minecraft/server";
import { ActionFormData, ModalFormData } from "@minecraft/server-ui";

export class Bank {
    static BankMenuForm() {
        const form = new ActionFormData()
            .title("§aBank Menu")
            .button("§eWithdraw")
            .button("§eDeposit");
        return form;
    }

    static WithdrawMenuForm() {
        const form = new ModalFormData()
            .title("§aWithDraw")
            .textField("", "Amount")
            .submitButton("Submit");
        return form;
    }

    static DepositdrawMenuForm() {
        const form = new ModalFormData()
            .title("§aDeposit")
            .textField("", "Amount")
            .submitButton("Submit");
        return form;
    }

    /**
     *
     * @param {Player} source
     */
    async WithDrawMenuHandler(source) {
        const responce = await WithdrawMenuForm().show(source);
        if (responce.canceled) return;
        if (!isNaN(responce.formValues)) {
        } else {
            source.sendMessage("§a[Bank] §e: §cInvalid Input");
        }
    }

    /**
     *
     * @param {Player} source
     */
    async DepositMenuHandler(source) {
        const responce = await DepositdrawMenuForm().show(source);
        if (responce.canceled) return;
        if (!isNaN(responce.formValues)) {
        } else {
            source.sendMessage("§a[Bank] §e: §cInvalid Input");
        }
    }

    /**
     *
     * @param {Player} source
     */
    async BankMenuHandler(source) {
        const responce = await BankMenuForm().show(source);
        if (responce.canceled) return;
        switch (responce.selection) {
            case 0:
                WithDrawMenuHandler(source);
                break;
            case 1:
                DepositMenuHandler(source);
                break;
            default:
                break;
        }
    }
}
