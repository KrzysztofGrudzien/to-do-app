import johnRamboImg from "../assets/images/rambo.png";
import johnyWickImg from "../assets/images/johnny-wick.jpg";
import killBillImg from "../assets/images/kill-bill.jpg";
import hannibalLecterImg from "../assets/images/hannibal.jpg";
import leonImg from "../assets/images/leon.jpg";

const CONSTANT = {
  PRIORITY: {
    LOW: "low",
    MEDIUM: "medium",
    HIGH: "high",
    ALL: "all"
  },

  FILTER: {
    CATEGORY: "category",
    PRIORITY: "priority"
  },

  CATEGORY: {
    WEBDESIGN: "webdesign",
    VR: "vr",
    ENGLISH: "english",
    MARKETING: "marketing",
    HOME: "home",
    DEVELOPMENT: "development",
    ALL: "all"
  },

  TASK: {
    COMPLETED: "completed",
    UNCOMPLETED: "uncompleted",
    All: "all"
  },

  AUTHOR: {
    RAMBO: "John Rambo",
    HANNIBAL: "Hannibal Lecter",
    BILL: "Kill Bill",
    WICK: "John Wick",
    LEON: "Leon"
  },

  AUTHOR_IMG: {
    RAMBO: johnRamboImg,
    HANNIBAL: hannibalLecterImg,
    BILL: killBillImg,
    WICK: johnyWickImg,
    LEON: leonImg
  },

  TIMER: {
    START: "start",
    PAUSE: "pause"
  },

  PATH: {
    DEFAULT: "/",
    TASKS: "/tasks",
    STATISTICS: "/statistics",
    ADD_TASK: "/add-task",
    PROJECTS: "/projects",
    CLIENTS: "/clients",
    SETTINGS: "/settings"
  }
};

export default CONSTANT;
