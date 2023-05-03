/* eslint-disable */

/**
 * @interface
 * @name IUser
 * @description
 * This interface describes the user data.
 */
export interface IUser {
    main?: IUserMain;
    activity?: IUserActivity;
    avgSession?: IUserAvgSession;
    performance?: IUserPerformance;
}

/**
 * User main data schema
 */
export interface IUserMain {
    id: number;
    userInfos: {
        firstName: string;
        lastName: string;
        age: number;
    };
    todayScore: number;
    keyData: {
        calorieCount: number;
        proteinCount: number;
        carbohydrateCount: number;
        lipidCount: number;
    };
}

/**
 * User activity data schema
 */
export interface IUserActivity {
    userId: number;
    sessions: {
        day: string;
        kilogram: number;
        calories: number;
    }[];
}

/**
 * User average session data schema
 */
export interface IUserAvgSession {
    userId: number;
    sessions: {
        day: number;
        sessionLength: number;
    }[];
}

/**
 * User performance data schema
 */
export interface IUserPerformance {
    userId: number;
    kind: Record<number, string>;
    data: {
        value: number;
        kind: number;
    }[];
}