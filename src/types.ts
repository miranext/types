export type Res<D = unknown> = {
    code: 0
    data: D
    reqId: string
} | {
    reqId: string
    code: 2 | 1
    error: string
}

export type Req<P = unknown> = {
    reqId: string
    payload: P
}
