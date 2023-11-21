"use client";
import {ISJAVA, RESUME_DIR_SALESFORCE, RESUME_DIR_JAVA} from "../constants/strings";

export function openForWork(){
  if(ISJAVA){
    return RESUME_DIR_JAVA;
  }
  return RESUME_DIR_SALESFORCE
}

export function checkPathname(redirect, props) {
  redirect = redirect.toLowerCase();
  if (redirect === "home" && props.pathname === "/films") {
    return "/";
  } else if (redirect === "films") {
    return "/" + redirect;
  }
  if (props.pathname === "/films") {
    if (redirect === "#home") {
      return "/";
    }
    return "/#" + redirect;
  }
  return "#" + redirect;
}



export function ageChecker(age) {
  let lastDigit = age.toString().slice(-1);
  let ageStr = age;
  if (lastDigit == 1) {
    ageStr += "st";
  } else if (lastDigit == 2) {
    ageStr += "nd";
  } else if (lastDigit == 3) {
    ageStr += "rd";
  } else {
    ageStr += "th";
  }
  return ageStr;
}

export function toUpperLowerCase(str, mode) {
  if (mode == "u" || mode == "U") {
    return str.toUpperCase();
  }
  return str.toLowerCase();
}
