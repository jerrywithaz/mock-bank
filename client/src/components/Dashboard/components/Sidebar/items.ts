import { 
    ROUTE_ACCOUNTS_HOME, 
    ROUTE_CONTACT_HOME, 
    ROUTE_FAQ_HOME, 
    ROUTE_FEEDBACK_HOME, 
    ROUTE_CARDS_HOME, 
    ROUTE_TRANSFER_MONEY_HOME 
} from 'routes';
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
            key: "cards_summary",
            title: "Cards Summary",
            url: ROUTE_CARDS_HOME
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
            url: ROUTE_TRANSFER_MONEY_HOME
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
            url: ROUTE_CONTACT_HOME
        }, {
            key: "faqs",
            title: "FAQ's",
            url: ROUTE_FAQ_HOME
        }, {
            key: "feedback",
            title: "Give Us Feedback",
            url: ROUTE_FEEDBACK_HOME
        }]
    }
];

export default items;