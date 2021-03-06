/**
 * Represents any resource that must be explicitly disposed of. The most common
 * use-case is as a return value for subscriptions, where calling `dispose()`
 * would cancel the subscription.
 */
export interface Disposable {
    dispose(): void;
}

export type DataID = string;

// Variables
export interface Variables {
    [name: string]: any;
}

export interface OperationType {
    readonly variables: Variables;
    readonly response: unknown;
}

/**
 * Settings for how a query response may be cached.
 *
 * - `force`: causes a query to be issued unconditionally, irrespective of the
 *   state of any configured response cache.
 * - `poll`: causes a query to live update by polling at the specified interval
 *   in milliseconds. (This value will be passed to setTimeout.)
 * - `liveConfigId`: causes a query to live update by calling GraphQLLiveQuery,
 *   it represents a configuration of gateway when doing live query
 * - `metadata`: user-supplied metadata.
 * - `transactionId`: a user-supplied value, intended for use as a unique id for
 *   a given instance of executing an operation.
 */
export interface CacheConfig {
    force?: boolean | null;
    poll?: number | null;
    liveConfigId?: string | null;
    metadata?: { [key: string]: unknown };
    transactionId?: string | null;
}
