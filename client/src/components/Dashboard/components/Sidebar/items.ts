import { ROUTE_ACCOUNTS_HOME } from '../../../../routes';
import { SidebarItem } from "./types";

const items: SidebarItem[] = [
    {
        key: "accounts",
        title: "Accounts",
        items: [{
            key: "accounts_summary",
            title: "Accounts Summary",
            url: ROUTE_ACCOUNTS_HOME
        }, {
            key: "add_an_account",
            title: "Add an Account",
            url: "/add_account"
        }]
    },
    {
        key: "transactions",
        title: "Transactions",
        items: [{
            key: "transfer_money",
            title: "Transfer Money",
            url: "/transfer_money"
        }, {
            key: "send_money",
            title: "Send Money",
            url: "/send_money"
        },{
            key: "dispute",
            title: "Dispute",
            url: "/dispute"
        }]
    },
    {
        key: "services",
        title: "Services",
        items: [{
            key: "account_statements",
            title: "Account Statements",
            url: "/account_statements"
        }, {
            key: "enroll_new_account",
            title: "Enroll a New Account",
            url: "/enroll_new_account"
        }, {
            key: "card_replacement",
            title: "Card Replacement",
            url: "/card_replacement"
        }, {
            key: "order_checkbook",
            title: "Order a Checkbook",
            url: "/order_checkbook"
        }]
    },
    {
        key: "help_and_support",
        title: "Help & Support",
        items: [{
            key: "contact",
            title: "Contact Us",
            url: "/contact"
        }, {
            key: "faqs",
            title: "FAQ's",
            url: "/faqs"
        }, {
            key: "feedback",
            title: "Give Us Feedback",
            url: "/feedback"
        }]
    }
];

export default items;