import fetch, { RequestInfo, RequestInit } from "node-fetch";
import { SysCallMapping } from "../system";

export function fetchSyscalls(): SysCallMapping {
  return {
    async json(ctx, url: RequestInfo, init: RequestInit) {
      let resp = await fetch(url, init);
      return resp.json();
    },
    async text(ctx, url: RequestInfo, init: RequestInit) {
      let resp = await fetch(url, init);
      return resp.text();
    },
  };
}