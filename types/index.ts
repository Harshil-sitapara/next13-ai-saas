export enum Tools {
    CONVERSATION = "CONVERSATION",
    MUSIC = "MUSIC",
    IMAGE = "IMAGE",
    VIDEO = "VIDEO",
    CODE = "CODE"
}
export declare const Roles: {
    readonly System: "system";
    readonly User: "user";
    readonly Assistant: "assistant";
    readonly Function: "function";
};

export declare type Roles = typeof Roles[keyof typeof Roles];

export interface ChatCompletionRequestMessage {
    content: string,
    role: Roles
}