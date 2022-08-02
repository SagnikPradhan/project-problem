export type PhoneCall = {
  agentId: number;
  phone: string;
  callDuration: string;
  callType: string;
};
export const phoneCalls: PhoneCall[] = [
  {
    agentId: 1,
    phone: "8085551234",
    callDuration: "5 minutes",
    callType: "inbound",
  },
  {
    agentId: 2,
    phone: "8085556789",
    callDuration: "3 hours, 5 minutes and 45 seconds",
    callType: "outbound",
  },
  {
    agentId: 2,
    phone: "5551234567",
    callDuration: "15 minutes and 40 seconds",
    callType: "inbound",
  },
  {
    agentId: 2,
    phone: "8085556789",
    callDuration: "3 minutes",
    callType: "outbound",
  },
  {
    agentId: 3,
    phone: "808-555-1234",
    callDuration: "25",
    callType: "outbound",
  },
  {
    agentId: 3,
    phone: "808-555-1234",
    callDuration: "1 second",
    callType: "outbound",
  },
];
