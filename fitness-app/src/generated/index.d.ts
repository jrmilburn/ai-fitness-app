
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model MuscleGroup
 * 
 */
export type MuscleGroup = $Result.DefaultSelection<Prisma.$MuscleGroupPayload>
/**
 * Model Program
 * 
 */
export type Program = $Result.DefaultSelection<Prisma.$ProgramPayload>
/**
 * Model ProgramTemplate
 * 
 */
export type ProgramTemplate = $Result.DefaultSelection<Prisma.$ProgramTemplatePayload>
/**
 * Model Week
 * 
 */
export type Week = $Result.DefaultSelection<Prisma.$WeekPayload>
/**
 * Model Workout
 * 
 */
export type Workout = $Result.DefaultSelection<Prisma.$WorkoutPayload>
/**
 * Model ExerciseTemplate
 * 
 */
export type ExerciseTemplate = $Result.DefaultSelection<Prisma.$ExerciseTemplatePayload>
/**
 * Model Exercise
 * 
 */
export type Exercise = $Result.DefaultSelection<Prisma.$ExercisePayload>
/**
 * Model Set
 * 
 */
export type Set = $Result.DefaultSelection<Prisma.$SetPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ProgramGoal: {
  STRENGTH: 'STRENGTH',
  HYPERTROPHY: 'HYPERTROPHY',
  ENDURANCE: 'ENDURANCE',
  GENERAL_FITNESS: 'GENERAL_FITNESS'
};

export type ProgramGoal = (typeof ProgramGoal)[keyof typeof ProgramGoal]


export const WorkoutMode: {
  STRENGTH: 'STRENGTH',
  CARDIO: 'CARDIO',
  MIXED: 'MIXED'
};

export type WorkoutMode = (typeof WorkoutMode)[keyof typeof WorkoutMode]


export const ExerciseType: {
  STRENGTH: 'STRENGTH',
  CARDIO_STEADY: 'CARDIO_STEADY',
  CARDIO_INTERVAL: 'CARDIO_INTERVAL'
};

export type ExerciseType = (typeof ExerciseType)[keyof typeof ExerciseType]


export const SetType: {
  NORMAL: 'NORMAL',
  WARMUP: 'WARMUP',
  BACKOFF: 'BACKOFF',
  INTERVAL: 'INTERVAL'
};

export type SetType = (typeof SetType)[keyof typeof SetType]

}

export type ProgramGoal = $Enums.ProgramGoal

export const ProgramGoal: typeof $Enums.ProgramGoal

export type WorkoutMode = $Enums.WorkoutMode

export const WorkoutMode: typeof $Enums.WorkoutMode

export type ExerciseType = $Enums.ExerciseType

export const ExerciseType: typeof $Enums.ExerciseType

export type SetType = $Enums.SetType

export const SetType: typeof $Enums.SetType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.muscleGroup`: Exposes CRUD operations for the **MuscleGroup** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MuscleGroups
    * const muscleGroups = await prisma.muscleGroup.findMany()
    * ```
    */
  get muscleGroup(): Prisma.MuscleGroupDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.program`: Exposes CRUD operations for the **Program** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Programs
    * const programs = await prisma.program.findMany()
    * ```
    */
  get program(): Prisma.ProgramDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.programTemplate`: Exposes CRUD operations for the **ProgramTemplate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProgramTemplates
    * const programTemplates = await prisma.programTemplate.findMany()
    * ```
    */
  get programTemplate(): Prisma.ProgramTemplateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.week`: Exposes CRUD operations for the **Week** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Weeks
    * const weeks = await prisma.week.findMany()
    * ```
    */
  get week(): Prisma.WeekDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workout`: Exposes CRUD operations for the **Workout** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Workouts
    * const workouts = await prisma.workout.findMany()
    * ```
    */
  get workout(): Prisma.WorkoutDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.exerciseTemplate`: Exposes CRUD operations for the **ExerciseTemplate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExerciseTemplates
    * const exerciseTemplates = await prisma.exerciseTemplate.findMany()
    * ```
    */
  get exerciseTemplate(): Prisma.ExerciseTemplateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.exercise`: Exposes CRUD operations for the **Exercise** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Exercises
    * const exercises = await prisma.exercise.findMany()
    * ```
    */
  get exercise(): Prisma.ExerciseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.set`: Exposes CRUD operations for the **Set** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sets
    * const sets = await prisma.set.findMany()
    * ```
    */
  get set(): Prisma.SetDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    MuscleGroup: 'MuscleGroup',
    Program: 'Program',
    ProgramTemplate: 'ProgramTemplate',
    Week: 'Week',
    Workout: 'Workout',
    ExerciseTemplate: 'ExerciseTemplate',
    Exercise: 'Exercise',
    Set: 'Set'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "muscleGroup" | "program" | "programTemplate" | "week" | "workout" | "exerciseTemplate" | "exercise" | "set"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      MuscleGroup: {
        payload: Prisma.$MuscleGroupPayload<ExtArgs>
        fields: Prisma.MuscleGroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MuscleGroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MuscleGroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MuscleGroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MuscleGroupPayload>
          }
          findFirst: {
            args: Prisma.MuscleGroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MuscleGroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MuscleGroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MuscleGroupPayload>
          }
          findMany: {
            args: Prisma.MuscleGroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MuscleGroupPayload>[]
          }
          create: {
            args: Prisma.MuscleGroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MuscleGroupPayload>
          }
          createMany: {
            args: Prisma.MuscleGroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MuscleGroupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MuscleGroupPayload>[]
          }
          delete: {
            args: Prisma.MuscleGroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MuscleGroupPayload>
          }
          update: {
            args: Prisma.MuscleGroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MuscleGroupPayload>
          }
          deleteMany: {
            args: Prisma.MuscleGroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MuscleGroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MuscleGroupUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MuscleGroupPayload>[]
          }
          upsert: {
            args: Prisma.MuscleGroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MuscleGroupPayload>
          }
          aggregate: {
            args: Prisma.MuscleGroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMuscleGroup>
          }
          groupBy: {
            args: Prisma.MuscleGroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<MuscleGroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.MuscleGroupCountArgs<ExtArgs>
            result: $Utils.Optional<MuscleGroupCountAggregateOutputType> | number
          }
        }
      }
      Program: {
        payload: Prisma.$ProgramPayload<ExtArgs>
        fields: Prisma.ProgramFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProgramFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProgramFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>
          }
          findFirst: {
            args: Prisma.ProgramFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProgramFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>
          }
          findMany: {
            args: Prisma.ProgramFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>[]
          }
          create: {
            args: Prisma.ProgramCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>
          }
          createMany: {
            args: Prisma.ProgramCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProgramCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>[]
          }
          delete: {
            args: Prisma.ProgramDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>
          }
          update: {
            args: Prisma.ProgramUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>
          }
          deleteMany: {
            args: Prisma.ProgramDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProgramUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProgramUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>[]
          }
          upsert: {
            args: Prisma.ProgramUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>
          }
          aggregate: {
            args: Prisma.ProgramAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProgram>
          }
          groupBy: {
            args: Prisma.ProgramGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProgramGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProgramCountArgs<ExtArgs>
            result: $Utils.Optional<ProgramCountAggregateOutputType> | number
          }
        }
      }
      ProgramTemplate: {
        payload: Prisma.$ProgramTemplatePayload<ExtArgs>
        fields: Prisma.ProgramTemplateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProgramTemplateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramTemplatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProgramTemplateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramTemplatePayload>
          }
          findFirst: {
            args: Prisma.ProgramTemplateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramTemplatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProgramTemplateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramTemplatePayload>
          }
          findMany: {
            args: Prisma.ProgramTemplateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramTemplatePayload>[]
          }
          create: {
            args: Prisma.ProgramTemplateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramTemplatePayload>
          }
          createMany: {
            args: Prisma.ProgramTemplateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProgramTemplateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramTemplatePayload>[]
          }
          delete: {
            args: Prisma.ProgramTemplateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramTemplatePayload>
          }
          update: {
            args: Prisma.ProgramTemplateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramTemplatePayload>
          }
          deleteMany: {
            args: Prisma.ProgramTemplateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProgramTemplateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProgramTemplateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramTemplatePayload>[]
          }
          upsert: {
            args: Prisma.ProgramTemplateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramTemplatePayload>
          }
          aggregate: {
            args: Prisma.ProgramTemplateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProgramTemplate>
          }
          groupBy: {
            args: Prisma.ProgramTemplateGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProgramTemplateGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProgramTemplateCountArgs<ExtArgs>
            result: $Utils.Optional<ProgramTemplateCountAggregateOutputType> | number
          }
        }
      }
      Week: {
        payload: Prisma.$WeekPayload<ExtArgs>
        fields: Prisma.WeekFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WeekFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeekPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WeekFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeekPayload>
          }
          findFirst: {
            args: Prisma.WeekFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeekPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WeekFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeekPayload>
          }
          findMany: {
            args: Prisma.WeekFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeekPayload>[]
          }
          create: {
            args: Prisma.WeekCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeekPayload>
          }
          createMany: {
            args: Prisma.WeekCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WeekCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeekPayload>[]
          }
          delete: {
            args: Prisma.WeekDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeekPayload>
          }
          update: {
            args: Prisma.WeekUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeekPayload>
          }
          deleteMany: {
            args: Prisma.WeekDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WeekUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WeekUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeekPayload>[]
          }
          upsert: {
            args: Prisma.WeekUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeekPayload>
          }
          aggregate: {
            args: Prisma.WeekAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWeek>
          }
          groupBy: {
            args: Prisma.WeekGroupByArgs<ExtArgs>
            result: $Utils.Optional<WeekGroupByOutputType>[]
          }
          count: {
            args: Prisma.WeekCountArgs<ExtArgs>
            result: $Utils.Optional<WeekCountAggregateOutputType> | number
          }
        }
      }
      Workout: {
        payload: Prisma.$WorkoutPayload<ExtArgs>
        fields: Prisma.WorkoutFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkoutFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkoutFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>
          }
          findFirst: {
            args: Prisma.WorkoutFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkoutFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>
          }
          findMany: {
            args: Prisma.WorkoutFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>[]
          }
          create: {
            args: Prisma.WorkoutCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>
          }
          createMany: {
            args: Prisma.WorkoutCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkoutCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>[]
          }
          delete: {
            args: Prisma.WorkoutDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>
          }
          update: {
            args: Prisma.WorkoutUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>
          }
          deleteMany: {
            args: Prisma.WorkoutDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkoutUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkoutUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>[]
          }
          upsert: {
            args: Prisma.WorkoutUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>
          }
          aggregate: {
            args: Prisma.WorkoutAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkout>
          }
          groupBy: {
            args: Prisma.WorkoutGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkoutGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkoutCountArgs<ExtArgs>
            result: $Utils.Optional<WorkoutCountAggregateOutputType> | number
          }
        }
      }
      ExerciseTemplate: {
        payload: Prisma.$ExerciseTemplatePayload<ExtArgs>
        fields: Prisma.ExerciseTemplateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExerciseTemplateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseTemplatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExerciseTemplateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseTemplatePayload>
          }
          findFirst: {
            args: Prisma.ExerciseTemplateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseTemplatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExerciseTemplateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseTemplatePayload>
          }
          findMany: {
            args: Prisma.ExerciseTemplateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseTemplatePayload>[]
          }
          create: {
            args: Prisma.ExerciseTemplateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseTemplatePayload>
          }
          createMany: {
            args: Prisma.ExerciseTemplateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExerciseTemplateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseTemplatePayload>[]
          }
          delete: {
            args: Prisma.ExerciseTemplateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseTemplatePayload>
          }
          update: {
            args: Prisma.ExerciseTemplateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseTemplatePayload>
          }
          deleteMany: {
            args: Prisma.ExerciseTemplateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExerciseTemplateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExerciseTemplateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseTemplatePayload>[]
          }
          upsert: {
            args: Prisma.ExerciseTemplateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseTemplatePayload>
          }
          aggregate: {
            args: Prisma.ExerciseTemplateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExerciseTemplate>
          }
          groupBy: {
            args: Prisma.ExerciseTemplateGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExerciseTemplateGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExerciseTemplateCountArgs<ExtArgs>
            result: $Utils.Optional<ExerciseTemplateCountAggregateOutputType> | number
          }
        }
      }
      Exercise: {
        payload: Prisma.$ExercisePayload<ExtArgs>
        fields: Prisma.ExerciseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExerciseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExerciseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          findFirst: {
            args: Prisma.ExerciseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExerciseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          findMany: {
            args: Prisma.ExerciseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>[]
          }
          create: {
            args: Prisma.ExerciseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          createMany: {
            args: Prisma.ExerciseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExerciseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>[]
          }
          delete: {
            args: Prisma.ExerciseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          update: {
            args: Prisma.ExerciseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          deleteMany: {
            args: Prisma.ExerciseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExerciseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExerciseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>[]
          }
          upsert: {
            args: Prisma.ExerciseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          aggregate: {
            args: Prisma.ExerciseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExercise>
          }
          groupBy: {
            args: Prisma.ExerciseGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExerciseGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExerciseCountArgs<ExtArgs>
            result: $Utils.Optional<ExerciseCountAggregateOutputType> | number
          }
        }
      }
      Set: {
        payload: Prisma.$SetPayload<ExtArgs>
        fields: Prisma.SetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetPayload>
          }
          findFirst: {
            args: Prisma.SetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetPayload>
          }
          findMany: {
            args: Prisma.SetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetPayload>[]
          }
          create: {
            args: Prisma.SetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetPayload>
          }
          createMany: {
            args: Prisma.SetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetPayload>[]
          }
          delete: {
            args: Prisma.SetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetPayload>
          }
          update: {
            args: Prisma.SetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetPayload>
          }
          deleteMany: {
            args: Prisma.SetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetPayload>[]
          }
          upsert: {
            args: Prisma.SetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetPayload>
          }
          aggregate: {
            args: Prisma.SetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSet>
          }
          groupBy: {
            args: Prisma.SetGroupByArgs<ExtArgs>
            result: $Utils.Optional<SetGroupByOutputType>[]
          }
          count: {
            args: Prisma.SetCountArgs<ExtArgs>
            result: $Utils.Optional<SetCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    muscleGroup?: MuscleGroupOmit
    program?: ProgramOmit
    programTemplate?: ProgramTemplateOmit
    week?: WeekOmit
    workout?: WorkoutOmit
    exerciseTemplate?: ExerciseTemplateOmit
    exercise?: ExerciseOmit
    set?: SetOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    programs: number
    exerciseTemplates: number
    programTemplates: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    programs?: boolean | UserCountOutputTypeCountProgramsArgs
    exerciseTemplates?: boolean | UserCountOutputTypeCountExerciseTemplatesArgs
    programTemplates?: boolean | UserCountOutputTypeCountProgramTemplatesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProgramsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgramWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountExerciseTemplatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExerciseTemplateWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProgramTemplatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgramTemplateWhereInput
  }


  /**
   * Count Type MuscleGroupCountOutputType
   */

  export type MuscleGroupCountOutputType = {
    exercises: number
    exerciseTemplates: number
  }

  export type MuscleGroupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exercises?: boolean | MuscleGroupCountOutputTypeCountExercisesArgs
    exerciseTemplates?: boolean | MuscleGroupCountOutputTypeCountExerciseTemplatesArgs
  }

  // Custom InputTypes
  /**
   * MuscleGroupCountOutputType without action
   */
  export type MuscleGroupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MuscleGroupCountOutputType
     */
    select?: MuscleGroupCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MuscleGroupCountOutputType without action
   */
  export type MuscleGroupCountOutputTypeCountExercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExerciseWhereInput
  }

  /**
   * MuscleGroupCountOutputType without action
   */
  export type MuscleGroupCountOutputTypeCountExerciseTemplatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExerciseTemplateWhereInput
  }


  /**
   * Count Type ProgramCountOutputType
   */

  export type ProgramCountOutputType = {
    weeks: number
  }

  export type ProgramCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    weeks?: boolean | ProgramCountOutputTypeCountWeeksArgs
  }

  // Custom InputTypes
  /**
   * ProgramCountOutputType without action
   */
  export type ProgramCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramCountOutputType
     */
    select?: ProgramCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProgramCountOutputType without action
   */
  export type ProgramCountOutputTypeCountWeeksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WeekWhereInput
  }


  /**
   * Count Type WeekCountOutputType
   */

  export type WeekCountOutputType = {
    workouts: number
  }

  export type WeekCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workouts?: boolean | WeekCountOutputTypeCountWorkoutsArgs
  }

  // Custom InputTypes
  /**
   * WeekCountOutputType without action
   */
  export type WeekCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeekCountOutputType
     */
    select?: WeekCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WeekCountOutputType without action
   */
  export type WeekCountOutputTypeCountWorkoutsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutWhereInput
  }


  /**
   * Count Type WorkoutCountOutputType
   */

  export type WorkoutCountOutputType = {
    exercises: number
  }

  export type WorkoutCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exercises?: boolean | WorkoutCountOutputTypeCountExercisesArgs
  }

  // Custom InputTypes
  /**
   * WorkoutCountOutputType without action
   */
  export type WorkoutCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutCountOutputType
     */
    select?: WorkoutCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkoutCountOutputType without action
   */
  export type WorkoutCountOutputTypeCountExercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExerciseWhereInput
  }


  /**
   * Count Type ExerciseTemplateCountOutputType
   */

  export type ExerciseTemplateCountOutputType = {
    exercises: number
  }

  export type ExerciseTemplateCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exercises?: boolean | ExerciseTemplateCountOutputTypeCountExercisesArgs
  }

  // Custom InputTypes
  /**
   * ExerciseTemplateCountOutputType without action
   */
  export type ExerciseTemplateCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseTemplateCountOutputType
     */
    select?: ExerciseTemplateCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExerciseTemplateCountOutputType without action
   */
  export type ExerciseTemplateCountOutputTypeCountExercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExerciseWhereInput
  }


  /**
   * Count Type ExerciseCountOutputType
   */

  export type ExerciseCountOutputType = {
    sets: number
  }

  export type ExerciseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sets?: boolean | ExerciseCountOutputTypeCountSetsArgs
  }

  // Custom InputTypes
  /**
   * ExerciseCountOutputType without action
   */
  export type ExerciseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseCountOutputType
     */
    select?: ExerciseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExerciseCountOutputType without action
   */
  export type ExerciseCountOutputTypeCountSetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SetWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    clerkId: string | null
    email: string | null
    phone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    clerkId: string | null
    email: string | null
    phone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    clerkId: number
    email: number
    phone: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    clerkId?: true
    email?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    clerkId?: true
    email?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    clerkId?: true
    email?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    clerkId: string
    email: string
    phone: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    email?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    programs?: boolean | User$programsArgs<ExtArgs>
    exerciseTemplates?: boolean | User$exerciseTemplatesArgs<ExtArgs>
    programTemplates?: boolean | User$programTemplatesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    email?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    email?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    clerkId?: boolean
    email?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clerkId" | "email" | "phone" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    programs?: boolean | User$programsArgs<ExtArgs>
    exerciseTemplates?: boolean | User$exerciseTemplatesArgs<ExtArgs>
    programTemplates?: boolean | User$programTemplatesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      programs: Prisma.$ProgramPayload<ExtArgs>[]
      exerciseTemplates: Prisma.$ExerciseTemplatePayload<ExtArgs>[]
      programTemplates: Prisma.$ProgramTemplatePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clerkId: string
      email: string
      phone: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    programs<T extends User$programsArgs<ExtArgs> = {}>(args?: Subset<T, User$programsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    exerciseTemplates<T extends User$exerciseTemplatesArgs<ExtArgs> = {}>(args?: Subset<T, User$exerciseTemplatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExerciseTemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    programTemplates<T extends User$programTemplatesArgs<ExtArgs> = {}>(args?: Subset<T, User$programTemplatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgramTemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly clerkId: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.programs
   */
  export type User$programsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
    where?: ProgramWhereInput
    orderBy?: ProgramOrderByWithRelationInput | ProgramOrderByWithRelationInput[]
    cursor?: ProgramWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProgramScalarFieldEnum | ProgramScalarFieldEnum[]
  }

  /**
   * User.exerciseTemplates
   */
  export type User$exerciseTemplatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseTemplate
     */
    select?: ExerciseTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseTemplate
     */
    omit?: ExerciseTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseTemplateInclude<ExtArgs> | null
    where?: ExerciseTemplateWhereInput
    orderBy?: ExerciseTemplateOrderByWithRelationInput | ExerciseTemplateOrderByWithRelationInput[]
    cursor?: ExerciseTemplateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExerciseTemplateScalarFieldEnum | ExerciseTemplateScalarFieldEnum[]
  }

  /**
   * User.programTemplates
   */
  export type User$programTemplatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramTemplate
     */
    select?: ProgramTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramTemplate
     */
    omit?: ProgramTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramTemplateInclude<ExtArgs> | null
    where?: ProgramTemplateWhereInput
    orderBy?: ProgramTemplateOrderByWithRelationInput | ProgramTemplateOrderByWithRelationInput[]
    cursor?: ProgramTemplateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProgramTemplateScalarFieldEnum | ProgramTemplateScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model MuscleGroup
   */

  export type AggregateMuscleGroup = {
    _count: MuscleGroupCountAggregateOutputType | null
    _min: MuscleGroupMinAggregateOutputType | null
    _max: MuscleGroupMaxAggregateOutputType | null
  }

  export type MuscleGroupMinAggregateOutputType = {
    id: string | null
    name: string | null
    shortName: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MuscleGroupMaxAggregateOutputType = {
    id: string | null
    name: string | null
    shortName: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MuscleGroupCountAggregateOutputType = {
    id: number
    name: number
    shortName: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MuscleGroupMinAggregateInputType = {
    id?: true
    name?: true
    shortName?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MuscleGroupMaxAggregateInputType = {
    id?: true
    name?: true
    shortName?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MuscleGroupCountAggregateInputType = {
    id?: true
    name?: true
    shortName?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MuscleGroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MuscleGroup to aggregate.
     */
    where?: MuscleGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MuscleGroups to fetch.
     */
    orderBy?: MuscleGroupOrderByWithRelationInput | MuscleGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MuscleGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MuscleGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MuscleGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MuscleGroups
    **/
    _count?: true | MuscleGroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MuscleGroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MuscleGroupMaxAggregateInputType
  }

  export type GetMuscleGroupAggregateType<T extends MuscleGroupAggregateArgs> = {
        [P in keyof T & keyof AggregateMuscleGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMuscleGroup[P]>
      : GetScalarType<T[P], AggregateMuscleGroup[P]>
  }




  export type MuscleGroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MuscleGroupWhereInput
    orderBy?: MuscleGroupOrderByWithAggregationInput | MuscleGroupOrderByWithAggregationInput[]
    by: MuscleGroupScalarFieldEnum[] | MuscleGroupScalarFieldEnum
    having?: MuscleGroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MuscleGroupCountAggregateInputType | true
    _min?: MuscleGroupMinAggregateInputType
    _max?: MuscleGroupMaxAggregateInputType
  }

  export type MuscleGroupGroupByOutputType = {
    id: string
    name: string
    shortName: string | null
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: MuscleGroupCountAggregateOutputType | null
    _min: MuscleGroupMinAggregateOutputType | null
    _max: MuscleGroupMaxAggregateOutputType | null
  }

  type GetMuscleGroupGroupByPayload<T extends MuscleGroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MuscleGroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MuscleGroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MuscleGroupGroupByOutputType[P]>
            : GetScalarType<T[P], MuscleGroupGroupByOutputType[P]>
        }
      >
    >


  export type MuscleGroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    shortName?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    exercises?: boolean | MuscleGroup$exercisesArgs<ExtArgs>
    exerciseTemplates?: boolean | MuscleGroup$exerciseTemplatesArgs<ExtArgs>
    _count?: boolean | MuscleGroupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["muscleGroup"]>

  export type MuscleGroupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    shortName?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["muscleGroup"]>

  export type MuscleGroupSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    shortName?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["muscleGroup"]>

  export type MuscleGroupSelectScalar = {
    id?: boolean
    name?: boolean
    shortName?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MuscleGroupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "shortName" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["muscleGroup"]>
  export type MuscleGroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exercises?: boolean | MuscleGroup$exercisesArgs<ExtArgs>
    exerciseTemplates?: boolean | MuscleGroup$exerciseTemplatesArgs<ExtArgs>
    _count?: boolean | MuscleGroupCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MuscleGroupIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MuscleGroupIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MuscleGroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MuscleGroup"
    objects: {
      exercises: Prisma.$ExercisePayload<ExtArgs>[]
      exerciseTemplates: Prisma.$ExerciseTemplatePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      shortName: string | null
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["muscleGroup"]>
    composites: {}
  }

  type MuscleGroupGetPayload<S extends boolean | null | undefined | MuscleGroupDefaultArgs> = $Result.GetResult<Prisma.$MuscleGroupPayload, S>

  type MuscleGroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MuscleGroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MuscleGroupCountAggregateInputType | true
    }

  export interface MuscleGroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MuscleGroup'], meta: { name: 'MuscleGroup' } }
    /**
     * Find zero or one MuscleGroup that matches the filter.
     * @param {MuscleGroupFindUniqueArgs} args - Arguments to find a MuscleGroup
     * @example
     * // Get one MuscleGroup
     * const muscleGroup = await prisma.muscleGroup.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MuscleGroupFindUniqueArgs>(args: SelectSubset<T, MuscleGroupFindUniqueArgs<ExtArgs>>): Prisma__MuscleGroupClient<$Result.GetResult<Prisma.$MuscleGroupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MuscleGroup that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MuscleGroupFindUniqueOrThrowArgs} args - Arguments to find a MuscleGroup
     * @example
     * // Get one MuscleGroup
     * const muscleGroup = await prisma.muscleGroup.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MuscleGroupFindUniqueOrThrowArgs>(args: SelectSubset<T, MuscleGroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MuscleGroupClient<$Result.GetResult<Prisma.$MuscleGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MuscleGroup that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MuscleGroupFindFirstArgs} args - Arguments to find a MuscleGroup
     * @example
     * // Get one MuscleGroup
     * const muscleGroup = await prisma.muscleGroup.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MuscleGroupFindFirstArgs>(args?: SelectSubset<T, MuscleGroupFindFirstArgs<ExtArgs>>): Prisma__MuscleGroupClient<$Result.GetResult<Prisma.$MuscleGroupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MuscleGroup that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MuscleGroupFindFirstOrThrowArgs} args - Arguments to find a MuscleGroup
     * @example
     * // Get one MuscleGroup
     * const muscleGroup = await prisma.muscleGroup.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MuscleGroupFindFirstOrThrowArgs>(args?: SelectSubset<T, MuscleGroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__MuscleGroupClient<$Result.GetResult<Prisma.$MuscleGroupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MuscleGroups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MuscleGroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MuscleGroups
     * const muscleGroups = await prisma.muscleGroup.findMany()
     * 
     * // Get first 10 MuscleGroups
     * const muscleGroups = await prisma.muscleGroup.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const muscleGroupWithIdOnly = await prisma.muscleGroup.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MuscleGroupFindManyArgs>(args?: SelectSubset<T, MuscleGroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MuscleGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MuscleGroup.
     * @param {MuscleGroupCreateArgs} args - Arguments to create a MuscleGroup.
     * @example
     * // Create one MuscleGroup
     * const MuscleGroup = await prisma.muscleGroup.create({
     *   data: {
     *     // ... data to create a MuscleGroup
     *   }
     * })
     * 
     */
    create<T extends MuscleGroupCreateArgs>(args: SelectSubset<T, MuscleGroupCreateArgs<ExtArgs>>): Prisma__MuscleGroupClient<$Result.GetResult<Prisma.$MuscleGroupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MuscleGroups.
     * @param {MuscleGroupCreateManyArgs} args - Arguments to create many MuscleGroups.
     * @example
     * // Create many MuscleGroups
     * const muscleGroup = await prisma.muscleGroup.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MuscleGroupCreateManyArgs>(args?: SelectSubset<T, MuscleGroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MuscleGroups and returns the data saved in the database.
     * @param {MuscleGroupCreateManyAndReturnArgs} args - Arguments to create many MuscleGroups.
     * @example
     * // Create many MuscleGroups
     * const muscleGroup = await prisma.muscleGroup.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MuscleGroups and only return the `id`
     * const muscleGroupWithIdOnly = await prisma.muscleGroup.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MuscleGroupCreateManyAndReturnArgs>(args?: SelectSubset<T, MuscleGroupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MuscleGroupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MuscleGroup.
     * @param {MuscleGroupDeleteArgs} args - Arguments to delete one MuscleGroup.
     * @example
     * // Delete one MuscleGroup
     * const MuscleGroup = await prisma.muscleGroup.delete({
     *   where: {
     *     // ... filter to delete one MuscleGroup
     *   }
     * })
     * 
     */
    delete<T extends MuscleGroupDeleteArgs>(args: SelectSubset<T, MuscleGroupDeleteArgs<ExtArgs>>): Prisma__MuscleGroupClient<$Result.GetResult<Prisma.$MuscleGroupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MuscleGroup.
     * @param {MuscleGroupUpdateArgs} args - Arguments to update one MuscleGroup.
     * @example
     * // Update one MuscleGroup
     * const muscleGroup = await prisma.muscleGroup.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MuscleGroupUpdateArgs>(args: SelectSubset<T, MuscleGroupUpdateArgs<ExtArgs>>): Prisma__MuscleGroupClient<$Result.GetResult<Prisma.$MuscleGroupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MuscleGroups.
     * @param {MuscleGroupDeleteManyArgs} args - Arguments to filter MuscleGroups to delete.
     * @example
     * // Delete a few MuscleGroups
     * const { count } = await prisma.muscleGroup.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MuscleGroupDeleteManyArgs>(args?: SelectSubset<T, MuscleGroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MuscleGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MuscleGroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MuscleGroups
     * const muscleGroup = await prisma.muscleGroup.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MuscleGroupUpdateManyArgs>(args: SelectSubset<T, MuscleGroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MuscleGroups and returns the data updated in the database.
     * @param {MuscleGroupUpdateManyAndReturnArgs} args - Arguments to update many MuscleGroups.
     * @example
     * // Update many MuscleGroups
     * const muscleGroup = await prisma.muscleGroup.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MuscleGroups and only return the `id`
     * const muscleGroupWithIdOnly = await prisma.muscleGroup.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MuscleGroupUpdateManyAndReturnArgs>(args: SelectSubset<T, MuscleGroupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MuscleGroupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MuscleGroup.
     * @param {MuscleGroupUpsertArgs} args - Arguments to update or create a MuscleGroup.
     * @example
     * // Update or create a MuscleGroup
     * const muscleGroup = await prisma.muscleGroup.upsert({
     *   create: {
     *     // ... data to create a MuscleGroup
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MuscleGroup we want to update
     *   }
     * })
     */
    upsert<T extends MuscleGroupUpsertArgs>(args: SelectSubset<T, MuscleGroupUpsertArgs<ExtArgs>>): Prisma__MuscleGroupClient<$Result.GetResult<Prisma.$MuscleGroupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MuscleGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MuscleGroupCountArgs} args - Arguments to filter MuscleGroups to count.
     * @example
     * // Count the number of MuscleGroups
     * const count = await prisma.muscleGroup.count({
     *   where: {
     *     // ... the filter for the MuscleGroups we want to count
     *   }
     * })
    **/
    count<T extends MuscleGroupCountArgs>(
      args?: Subset<T, MuscleGroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MuscleGroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MuscleGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MuscleGroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MuscleGroupAggregateArgs>(args: Subset<T, MuscleGroupAggregateArgs>): Prisma.PrismaPromise<GetMuscleGroupAggregateType<T>>

    /**
     * Group by MuscleGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MuscleGroupGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MuscleGroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MuscleGroupGroupByArgs['orderBy'] }
        : { orderBy?: MuscleGroupGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MuscleGroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMuscleGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MuscleGroup model
   */
  readonly fields: MuscleGroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MuscleGroup.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MuscleGroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    exercises<T extends MuscleGroup$exercisesArgs<ExtArgs> = {}>(args?: Subset<T, MuscleGroup$exercisesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    exerciseTemplates<T extends MuscleGroup$exerciseTemplatesArgs<ExtArgs> = {}>(args?: Subset<T, MuscleGroup$exerciseTemplatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExerciseTemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MuscleGroup model
   */
  interface MuscleGroupFieldRefs {
    readonly id: FieldRef<"MuscleGroup", 'String'>
    readonly name: FieldRef<"MuscleGroup", 'String'>
    readonly shortName: FieldRef<"MuscleGroup", 'String'>
    readonly description: FieldRef<"MuscleGroup", 'String'>
    readonly createdAt: FieldRef<"MuscleGroup", 'DateTime'>
    readonly updatedAt: FieldRef<"MuscleGroup", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MuscleGroup findUnique
   */
  export type MuscleGroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MuscleGroup
     */
    select?: MuscleGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MuscleGroup
     */
    omit?: MuscleGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MuscleGroupInclude<ExtArgs> | null
    /**
     * Filter, which MuscleGroup to fetch.
     */
    where: MuscleGroupWhereUniqueInput
  }

  /**
   * MuscleGroup findUniqueOrThrow
   */
  export type MuscleGroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MuscleGroup
     */
    select?: MuscleGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MuscleGroup
     */
    omit?: MuscleGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MuscleGroupInclude<ExtArgs> | null
    /**
     * Filter, which MuscleGroup to fetch.
     */
    where: MuscleGroupWhereUniqueInput
  }

  /**
   * MuscleGroup findFirst
   */
  export type MuscleGroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MuscleGroup
     */
    select?: MuscleGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MuscleGroup
     */
    omit?: MuscleGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MuscleGroupInclude<ExtArgs> | null
    /**
     * Filter, which MuscleGroup to fetch.
     */
    where?: MuscleGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MuscleGroups to fetch.
     */
    orderBy?: MuscleGroupOrderByWithRelationInput | MuscleGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MuscleGroups.
     */
    cursor?: MuscleGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MuscleGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MuscleGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MuscleGroups.
     */
    distinct?: MuscleGroupScalarFieldEnum | MuscleGroupScalarFieldEnum[]
  }

  /**
   * MuscleGroup findFirstOrThrow
   */
  export type MuscleGroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MuscleGroup
     */
    select?: MuscleGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MuscleGroup
     */
    omit?: MuscleGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MuscleGroupInclude<ExtArgs> | null
    /**
     * Filter, which MuscleGroup to fetch.
     */
    where?: MuscleGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MuscleGroups to fetch.
     */
    orderBy?: MuscleGroupOrderByWithRelationInput | MuscleGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MuscleGroups.
     */
    cursor?: MuscleGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MuscleGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MuscleGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MuscleGroups.
     */
    distinct?: MuscleGroupScalarFieldEnum | MuscleGroupScalarFieldEnum[]
  }

  /**
   * MuscleGroup findMany
   */
  export type MuscleGroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MuscleGroup
     */
    select?: MuscleGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MuscleGroup
     */
    omit?: MuscleGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MuscleGroupInclude<ExtArgs> | null
    /**
     * Filter, which MuscleGroups to fetch.
     */
    where?: MuscleGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MuscleGroups to fetch.
     */
    orderBy?: MuscleGroupOrderByWithRelationInput | MuscleGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MuscleGroups.
     */
    cursor?: MuscleGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MuscleGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MuscleGroups.
     */
    skip?: number
    distinct?: MuscleGroupScalarFieldEnum | MuscleGroupScalarFieldEnum[]
  }

  /**
   * MuscleGroup create
   */
  export type MuscleGroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MuscleGroup
     */
    select?: MuscleGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MuscleGroup
     */
    omit?: MuscleGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MuscleGroupInclude<ExtArgs> | null
    /**
     * The data needed to create a MuscleGroup.
     */
    data: XOR<MuscleGroupCreateInput, MuscleGroupUncheckedCreateInput>
  }

  /**
   * MuscleGroup createMany
   */
  export type MuscleGroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MuscleGroups.
     */
    data: MuscleGroupCreateManyInput | MuscleGroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MuscleGroup createManyAndReturn
   */
  export type MuscleGroupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MuscleGroup
     */
    select?: MuscleGroupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MuscleGroup
     */
    omit?: MuscleGroupOmit<ExtArgs> | null
    /**
     * The data used to create many MuscleGroups.
     */
    data: MuscleGroupCreateManyInput | MuscleGroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MuscleGroup update
   */
  export type MuscleGroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MuscleGroup
     */
    select?: MuscleGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MuscleGroup
     */
    omit?: MuscleGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MuscleGroupInclude<ExtArgs> | null
    /**
     * The data needed to update a MuscleGroup.
     */
    data: XOR<MuscleGroupUpdateInput, MuscleGroupUncheckedUpdateInput>
    /**
     * Choose, which MuscleGroup to update.
     */
    where: MuscleGroupWhereUniqueInput
  }

  /**
   * MuscleGroup updateMany
   */
  export type MuscleGroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MuscleGroups.
     */
    data: XOR<MuscleGroupUpdateManyMutationInput, MuscleGroupUncheckedUpdateManyInput>
    /**
     * Filter which MuscleGroups to update
     */
    where?: MuscleGroupWhereInput
    /**
     * Limit how many MuscleGroups to update.
     */
    limit?: number
  }

  /**
   * MuscleGroup updateManyAndReturn
   */
  export type MuscleGroupUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MuscleGroup
     */
    select?: MuscleGroupSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MuscleGroup
     */
    omit?: MuscleGroupOmit<ExtArgs> | null
    /**
     * The data used to update MuscleGroups.
     */
    data: XOR<MuscleGroupUpdateManyMutationInput, MuscleGroupUncheckedUpdateManyInput>
    /**
     * Filter which MuscleGroups to update
     */
    where?: MuscleGroupWhereInput
    /**
     * Limit how many MuscleGroups to update.
     */
    limit?: number
  }

  /**
   * MuscleGroup upsert
   */
  export type MuscleGroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MuscleGroup
     */
    select?: MuscleGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MuscleGroup
     */
    omit?: MuscleGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MuscleGroupInclude<ExtArgs> | null
    /**
     * The filter to search for the MuscleGroup to update in case it exists.
     */
    where: MuscleGroupWhereUniqueInput
    /**
     * In case the MuscleGroup found by the `where` argument doesn't exist, create a new MuscleGroup with this data.
     */
    create: XOR<MuscleGroupCreateInput, MuscleGroupUncheckedCreateInput>
    /**
     * In case the MuscleGroup was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MuscleGroupUpdateInput, MuscleGroupUncheckedUpdateInput>
  }

  /**
   * MuscleGroup delete
   */
  export type MuscleGroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MuscleGroup
     */
    select?: MuscleGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MuscleGroup
     */
    omit?: MuscleGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MuscleGroupInclude<ExtArgs> | null
    /**
     * Filter which MuscleGroup to delete.
     */
    where: MuscleGroupWhereUniqueInput
  }

  /**
   * MuscleGroup deleteMany
   */
  export type MuscleGroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MuscleGroups to delete
     */
    where?: MuscleGroupWhereInput
    /**
     * Limit how many MuscleGroups to delete.
     */
    limit?: number
  }

  /**
   * MuscleGroup.exercises
   */
  export type MuscleGroup$exercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    where?: ExerciseWhereInput
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    cursor?: ExerciseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExerciseScalarFieldEnum | ExerciseScalarFieldEnum[]
  }

  /**
   * MuscleGroup.exerciseTemplates
   */
  export type MuscleGroup$exerciseTemplatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseTemplate
     */
    select?: ExerciseTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseTemplate
     */
    omit?: ExerciseTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseTemplateInclude<ExtArgs> | null
    where?: ExerciseTemplateWhereInput
    orderBy?: ExerciseTemplateOrderByWithRelationInput | ExerciseTemplateOrderByWithRelationInput[]
    cursor?: ExerciseTemplateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExerciseTemplateScalarFieldEnum | ExerciseTemplateScalarFieldEnum[]
  }

  /**
   * MuscleGroup without action
   */
  export type MuscleGroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MuscleGroup
     */
    select?: MuscleGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MuscleGroup
     */
    omit?: MuscleGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MuscleGroupInclude<ExtArgs> | null
  }


  /**
   * Model Program
   */

  export type AggregateProgram = {
    _count: ProgramCountAggregateOutputType | null
    _avg: ProgramAvgAggregateOutputType | null
    _sum: ProgramSumAggregateOutputType | null
    _min: ProgramMinAggregateOutputType | null
    _max: ProgramMaxAggregateOutputType | null
  }

  export type ProgramAvgAggregateOutputType = {
    length: number | null
    days: number | null
  }

  export type ProgramSumAggregateOutputType = {
    length: number | null
    days: number | null
  }

  export type ProgramMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    goal: $Enums.ProgramGoal | null
    length: number | null
    days: number | null
    currentWeekId: string | null
    completed: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProgramMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    goal: $Enums.ProgramGoal | null
    length: number | null
    days: number | null
    currentWeekId: string | null
    completed: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProgramCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    goal: number
    length: number
    days: number
    currentWeekId: number
    completed: number
    aiPlanJson: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProgramAvgAggregateInputType = {
    length?: true
    days?: true
  }

  export type ProgramSumAggregateInputType = {
    length?: true
    days?: true
  }

  export type ProgramMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    goal?: true
    length?: true
    days?: true
    currentWeekId?: true
    completed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProgramMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    goal?: true
    length?: true
    days?: true
    currentWeekId?: true
    completed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProgramCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    goal?: true
    length?: true
    days?: true
    currentWeekId?: true
    completed?: true
    aiPlanJson?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProgramAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Program to aggregate.
     */
    where?: ProgramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Programs to fetch.
     */
    orderBy?: ProgramOrderByWithRelationInput | ProgramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProgramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Programs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Programs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Programs
    **/
    _count?: true | ProgramCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProgramAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProgramSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProgramMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProgramMaxAggregateInputType
  }

  export type GetProgramAggregateType<T extends ProgramAggregateArgs> = {
        [P in keyof T & keyof AggregateProgram]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProgram[P]>
      : GetScalarType<T[P], AggregateProgram[P]>
  }




  export type ProgramGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgramWhereInput
    orderBy?: ProgramOrderByWithAggregationInput | ProgramOrderByWithAggregationInput[]
    by: ProgramScalarFieldEnum[] | ProgramScalarFieldEnum
    having?: ProgramScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProgramCountAggregateInputType | true
    _avg?: ProgramAvgAggregateInputType
    _sum?: ProgramSumAggregateInputType
    _min?: ProgramMinAggregateInputType
    _max?: ProgramMaxAggregateInputType
  }

  export type ProgramGroupByOutputType = {
    id: string
    userId: string | null
    name: string
    goal: $Enums.ProgramGoal | null
    length: number
    days: number
    currentWeekId: string | null
    completed: boolean
    aiPlanJson: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: ProgramCountAggregateOutputType | null
    _avg: ProgramAvgAggregateOutputType | null
    _sum: ProgramSumAggregateOutputType | null
    _min: ProgramMinAggregateOutputType | null
    _max: ProgramMaxAggregateOutputType | null
  }

  type GetProgramGroupByPayload<T extends ProgramGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProgramGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProgramGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProgramGroupByOutputType[P]>
            : GetScalarType<T[P], ProgramGroupByOutputType[P]>
        }
      >
    >


  export type ProgramSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    goal?: boolean
    length?: boolean
    days?: boolean
    currentWeekId?: boolean
    completed?: boolean
    aiPlanJson?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | Program$userArgs<ExtArgs>
    weeks?: boolean | Program$weeksArgs<ExtArgs>
    currentWeek?: boolean | Program$currentWeekArgs<ExtArgs>
    _count?: boolean | ProgramCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["program"]>

  export type ProgramSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    goal?: boolean
    length?: boolean
    days?: boolean
    currentWeekId?: boolean
    completed?: boolean
    aiPlanJson?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | Program$userArgs<ExtArgs>
    currentWeek?: boolean | Program$currentWeekArgs<ExtArgs>
  }, ExtArgs["result"]["program"]>

  export type ProgramSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    goal?: boolean
    length?: boolean
    days?: boolean
    currentWeekId?: boolean
    completed?: boolean
    aiPlanJson?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | Program$userArgs<ExtArgs>
    currentWeek?: boolean | Program$currentWeekArgs<ExtArgs>
  }, ExtArgs["result"]["program"]>

  export type ProgramSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    goal?: boolean
    length?: boolean
    days?: boolean
    currentWeekId?: boolean
    completed?: boolean
    aiPlanJson?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProgramOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "goal" | "length" | "days" | "currentWeekId" | "completed" | "aiPlanJson" | "createdAt" | "updatedAt", ExtArgs["result"]["program"]>
  export type ProgramInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Program$userArgs<ExtArgs>
    weeks?: boolean | Program$weeksArgs<ExtArgs>
    currentWeek?: boolean | Program$currentWeekArgs<ExtArgs>
    _count?: boolean | ProgramCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProgramIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Program$userArgs<ExtArgs>
    currentWeek?: boolean | Program$currentWeekArgs<ExtArgs>
  }
  export type ProgramIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Program$userArgs<ExtArgs>
    currentWeek?: boolean | Program$currentWeekArgs<ExtArgs>
  }

  export type $ProgramPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Program"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      weeks: Prisma.$WeekPayload<ExtArgs>[]
      currentWeek: Prisma.$WeekPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string | null
      name: string
      goal: $Enums.ProgramGoal | null
      length: number
      days: number
      currentWeekId: string | null
      completed: boolean
      aiPlanJson: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["program"]>
    composites: {}
  }

  type ProgramGetPayload<S extends boolean | null | undefined | ProgramDefaultArgs> = $Result.GetResult<Prisma.$ProgramPayload, S>

  type ProgramCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProgramFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProgramCountAggregateInputType | true
    }

  export interface ProgramDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Program'], meta: { name: 'Program' } }
    /**
     * Find zero or one Program that matches the filter.
     * @param {ProgramFindUniqueArgs} args - Arguments to find a Program
     * @example
     * // Get one Program
     * const program = await prisma.program.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProgramFindUniqueArgs>(args: SelectSubset<T, ProgramFindUniqueArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Program that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProgramFindUniqueOrThrowArgs} args - Arguments to find a Program
     * @example
     * // Get one Program
     * const program = await prisma.program.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProgramFindUniqueOrThrowArgs>(args: SelectSubset<T, ProgramFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Program that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramFindFirstArgs} args - Arguments to find a Program
     * @example
     * // Get one Program
     * const program = await prisma.program.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProgramFindFirstArgs>(args?: SelectSubset<T, ProgramFindFirstArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Program that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramFindFirstOrThrowArgs} args - Arguments to find a Program
     * @example
     * // Get one Program
     * const program = await prisma.program.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProgramFindFirstOrThrowArgs>(args?: SelectSubset<T, ProgramFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Programs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Programs
     * const programs = await prisma.program.findMany()
     * 
     * // Get first 10 Programs
     * const programs = await prisma.program.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const programWithIdOnly = await prisma.program.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProgramFindManyArgs>(args?: SelectSubset<T, ProgramFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Program.
     * @param {ProgramCreateArgs} args - Arguments to create a Program.
     * @example
     * // Create one Program
     * const Program = await prisma.program.create({
     *   data: {
     *     // ... data to create a Program
     *   }
     * })
     * 
     */
    create<T extends ProgramCreateArgs>(args: SelectSubset<T, ProgramCreateArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Programs.
     * @param {ProgramCreateManyArgs} args - Arguments to create many Programs.
     * @example
     * // Create many Programs
     * const program = await prisma.program.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProgramCreateManyArgs>(args?: SelectSubset<T, ProgramCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Programs and returns the data saved in the database.
     * @param {ProgramCreateManyAndReturnArgs} args - Arguments to create many Programs.
     * @example
     * // Create many Programs
     * const program = await prisma.program.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Programs and only return the `id`
     * const programWithIdOnly = await prisma.program.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProgramCreateManyAndReturnArgs>(args?: SelectSubset<T, ProgramCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Program.
     * @param {ProgramDeleteArgs} args - Arguments to delete one Program.
     * @example
     * // Delete one Program
     * const Program = await prisma.program.delete({
     *   where: {
     *     // ... filter to delete one Program
     *   }
     * })
     * 
     */
    delete<T extends ProgramDeleteArgs>(args: SelectSubset<T, ProgramDeleteArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Program.
     * @param {ProgramUpdateArgs} args - Arguments to update one Program.
     * @example
     * // Update one Program
     * const program = await prisma.program.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProgramUpdateArgs>(args: SelectSubset<T, ProgramUpdateArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Programs.
     * @param {ProgramDeleteManyArgs} args - Arguments to filter Programs to delete.
     * @example
     * // Delete a few Programs
     * const { count } = await prisma.program.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProgramDeleteManyArgs>(args?: SelectSubset<T, ProgramDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Programs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Programs
     * const program = await prisma.program.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProgramUpdateManyArgs>(args: SelectSubset<T, ProgramUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Programs and returns the data updated in the database.
     * @param {ProgramUpdateManyAndReturnArgs} args - Arguments to update many Programs.
     * @example
     * // Update many Programs
     * const program = await prisma.program.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Programs and only return the `id`
     * const programWithIdOnly = await prisma.program.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProgramUpdateManyAndReturnArgs>(args: SelectSubset<T, ProgramUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Program.
     * @param {ProgramUpsertArgs} args - Arguments to update or create a Program.
     * @example
     * // Update or create a Program
     * const program = await prisma.program.upsert({
     *   create: {
     *     // ... data to create a Program
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Program we want to update
     *   }
     * })
     */
    upsert<T extends ProgramUpsertArgs>(args: SelectSubset<T, ProgramUpsertArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Programs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramCountArgs} args - Arguments to filter Programs to count.
     * @example
     * // Count the number of Programs
     * const count = await prisma.program.count({
     *   where: {
     *     // ... the filter for the Programs we want to count
     *   }
     * })
    **/
    count<T extends ProgramCountArgs>(
      args?: Subset<T, ProgramCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProgramCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Program.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProgramAggregateArgs>(args: Subset<T, ProgramAggregateArgs>): Prisma.PrismaPromise<GetProgramAggregateType<T>>

    /**
     * Group by Program.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProgramGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProgramGroupByArgs['orderBy'] }
        : { orderBy?: ProgramGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProgramGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProgramGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Program model
   */
  readonly fields: ProgramFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Program.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProgramClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Program$userArgs<ExtArgs> = {}>(args?: Subset<T, Program$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    weeks<T extends Program$weeksArgs<ExtArgs> = {}>(args?: Subset<T, Program$weeksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeekPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    currentWeek<T extends Program$currentWeekArgs<ExtArgs> = {}>(args?: Subset<T, Program$currentWeekArgs<ExtArgs>>): Prisma__WeekClient<$Result.GetResult<Prisma.$WeekPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Program model
   */
  interface ProgramFieldRefs {
    readonly id: FieldRef<"Program", 'String'>
    readonly userId: FieldRef<"Program", 'String'>
    readonly name: FieldRef<"Program", 'String'>
    readonly goal: FieldRef<"Program", 'ProgramGoal'>
    readonly length: FieldRef<"Program", 'Int'>
    readonly days: FieldRef<"Program", 'Int'>
    readonly currentWeekId: FieldRef<"Program", 'String'>
    readonly completed: FieldRef<"Program", 'Boolean'>
    readonly aiPlanJson: FieldRef<"Program", 'Json'>
    readonly createdAt: FieldRef<"Program", 'DateTime'>
    readonly updatedAt: FieldRef<"Program", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Program findUnique
   */
  export type ProgramFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
    /**
     * Filter, which Program to fetch.
     */
    where: ProgramWhereUniqueInput
  }

  /**
   * Program findUniqueOrThrow
   */
  export type ProgramFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
    /**
     * Filter, which Program to fetch.
     */
    where: ProgramWhereUniqueInput
  }

  /**
   * Program findFirst
   */
  export type ProgramFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
    /**
     * Filter, which Program to fetch.
     */
    where?: ProgramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Programs to fetch.
     */
    orderBy?: ProgramOrderByWithRelationInput | ProgramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Programs.
     */
    cursor?: ProgramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Programs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Programs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Programs.
     */
    distinct?: ProgramScalarFieldEnum | ProgramScalarFieldEnum[]
  }

  /**
   * Program findFirstOrThrow
   */
  export type ProgramFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
    /**
     * Filter, which Program to fetch.
     */
    where?: ProgramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Programs to fetch.
     */
    orderBy?: ProgramOrderByWithRelationInput | ProgramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Programs.
     */
    cursor?: ProgramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Programs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Programs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Programs.
     */
    distinct?: ProgramScalarFieldEnum | ProgramScalarFieldEnum[]
  }

  /**
   * Program findMany
   */
  export type ProgramFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
    /**
     * Filter, which Programs to fetch.
     */
    where?: ProgramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Programs to fetch.
     */
    orderBy?: ProgramOrderByWithRelationInput | ProgramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Programs.
     */
    cursor?: ProgramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Programs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Programs.
     */
    skip?: number
    distinct?: ProgramScalarFieldEnum | ProgramScalarFieldEnum[]
  }

  /**
   * Program create
   */
  export type ProgramCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
    /**
     * The data needed to create a Program.
     */
    data: XOR<ProgramCreateInput, ProgramUncheckedCreateInput>
  }

  /**
   * Program createMany
   */
  export type ProgramCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Programs.
     */
    data: ProgramCreateManyInput | ProgramCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Program createManyAndReturn
   */
  export type ProgramCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * The data used to create many Programs.
     */
    data: ProgramCreateManyInput | ProgramCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Program update
   */
  export type ProgramUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
    /**
     * The data needed to update a Program.
     */
    data: XOR<ProgramUpdateInput, ProgramUncheckedUpdateInput>
    /**
     * Choose, which Program to update.
     */
    where: ProgramWhereUniqueInput
  }

  /**
   * Program updateMany
   */
  export type ProgramUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Programs.
     */
    data: XOR<ProgramUpdateManyMutationInput, ProgramUncheckedUpdateManyInput>
    /**
     * Filter which Programs to update
     */
    where?: ProgramWhereInput
    /**
     * Limit how many Programs to update.
     */
    limit?: number
  }

  /**
   * Program updateManyAndReturn
   */
  export type ProgramUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * The data used to update Programs.
     */
    data: XOR<ProgramUpdateManyMutationInput, ProgramUncheckedUpdateManyInput>
    /**
     * Filter which Programs to update
     */
    where?: ProgramWhereInput
    /**
     * Limit how many Programs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Program upsert
   */
  export type ProgramUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
    /**
     * The filter to search for the Program to update in case it exists.
     */
    where: ProgramWhereUniqueInput
    /**
     * In case the Program found by the `where` argument doesn't exist, create a new Program with this data.
     */
    create: XOR<ProgramCreateInput, ProgramUncheckedCreateInput>
    /**
     * In case the Program was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProgramUpdateInput, ProgramUncheckedUpdateInput>
  }

  /**
   * Program delete
   */
  export type ProgramDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
    /**
     * Filter which Program to delete.
     */
    where: ProgramWhereUniqueInput
  }

  /**
   * Program deleteMany
   */
  export type ProgramDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Programs to delete
     */
    where?: ProgramWhereInput
    /**
     * Limit how many Programs to delete.
     */
    limit?: number
  }

  /**
   * Program.user
   */
  export type Program$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Program.weeks
   */
  export type Program$weeksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Week
     */
    select?: WeekSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Week
     */
    omit?: WeekOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeekInclude<ExtArgs> | null
    where?: WeekWhereInput
    orderBy?: WeekOrderByWithRelationInput | WeekOrderByWithRelationInput[]
    cursor?: WeekWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WeekScalarFieldEnum | WeekScalarFieldEnum[]
  }

  /**
   * Program.currentWeek
   */
  export type Program$currentWeekArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Week
     */
    select?: WeekSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Week
     */
    omit?: WeekOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeekInclude<ExtArgs> | null
    where?: WeekWhereInput
  }

  /**
   * Program without action
   */
  export type ProgramDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
  }


  /**
   * Model ProgramTemplate
   */

  export type AggregateProgramTemplate = {
    _count: ProgramTemplateCountAggregateOutputType | null
    _avg: ProgramTemplateAvgAggregateOutputType | null
    _sum: ProgramTemplateSumAggregateOutputType | null
    _min: ProgramTemplateMinAggregateOutputType | null
    _max: ProgramTemplateMaxAggregateOutputType | null
  }

  export type ProgramTemplateAvgAggregateOutputType = {
    length: number | null
    days: number | null
  }

  export type ProgramTemplateSumAggregateOutputType = {
    length: number | null
    days: number | null
  }

  export type ProgramTemplateMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    goal: $Enums.ProgramGoal | null
    length: number | null
    days: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProgramTemplateMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    goal: $Enums.ProgramGoal | null
    length: number | null
    days: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProgramTemplateCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    goal: number
    length: number
    days: number
    structureJson: number
    aiPlanJson: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProgramTemplateAvgAggregateInputType = {
    length?: true
    days?: true
  }

  export type ProgramTemplateSumAggregateInputType = {
    length?: true
    days?: true
  }

  export type ProgramTemplateMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    goal?: true
    length?: true
    days?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProgramTemplateMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    goal?: true
    length?: true
    days?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProgramTemplateCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    goal?: true
    length?: true
    days?: true
    structureJson?: true
    aiPlanJson?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProgramTemplateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProgramTemplate to aggregate.
     */
    where?: ProgramTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgramTemplates to fetch.
     */
    orderBy?: ProgramTemplateOrderByWithRelationInput | ProgramTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProgramTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgramTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgramTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProgramTemplates
    **/
    _count?: true | ProgramTemplateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProgramTemplateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProgramTemplateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProgramTemplateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProgramTemplateMaxAggregateInputType
  }

  export type GetProgramTemplateAggregateType<T extends ProgramTemplateAggregateArgs> = {
        [P in keyof T & keyof AggregateProgramTemplate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProgramTemplate[P]>
      : GetScalarType<T[P], AggregateProgramTemplate[P]>
  }




  export type ProgramTemplateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgramTemplateWhereInput
    orderBy?: ProgramTemplateOrderByWithAggregationInput | ProgramTemplateOrderByWithAggregationInput[]
    by: ProgramTemplateScalarFieldEnum[] | ProgramTemplateScalarFieldEnum
    having?: ProgramTemplateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProgramTemplateCountAggregateInputType | true
    _avg?: ProgramTemplateAvgAggregateInputType
    _sum?: ProgramTemplateSumAggregateInputType
    _min?: ProgramTemplateMinAggregateInputType
    _max?: ProgramTemplateMaxAggregateInputType
  }

  export type ProgramTemplateGroupByOutputType = {
    id: string
    userId: string | null
    name: string
    goal: $Enums.ProgramGoal | null
    length: number
    days: number
    structureJson: JsonValue | null
    aiPlanJson: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: ProgramTemplateCountAggregateOutputType | null
    _avg: ProgramTemplateAvgAggregateOutputType | null
    _sum: ProgramTemplateSumAggregateOutputType | null
    _min: ProgramTemplateMinAggregateOutputType | null
    _max: ProgramTemplateMaxAggregateOutputType | null
  }

  type GetProgramTemplateGroupByPayload<T extends ProgramTemplateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProgramTemplateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProgramTemplateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProgramTemplateGroupByOutputType[P]>
            : GetScalarType<T[P], ProgramTemplateGroupByOutputType[P]>
        }
      >
    >


  export type ProgramTemplateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    goal?: boolean
    length?: boolean
    days?: boolean
    structureJson?: boolean
    aiPlanJson?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | ProgramTemplate$userArgs<ExtArgs>
  }, ExtArgs["result"]["programTemplate"]>

  export type ProgramTemplateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    goal?: boolean
    length?: boolean
    days?: boolean
    structureJson?: boolean
    aiPlanJson?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | ProgramTemplate$userArgs<ExtArgs>
  }, ExtArgs["result"]["programTemplate"]>

  export type ProgramTemplateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    goal?: boolean
    length?: boolean
    days?: boolean
    structureJson?: boolean
    aiPlanJson?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | ProgramTemplate$userArgs<ExtArgs>
  }, ExtArgs["result"]["programTemplate"]>

  export type ProgramTemplateSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    goal?: boolean
    length?: boolean
    days?: boolean
    structureJson?: boolean
    aiPlanJson?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProgramTemplateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "goal" | "length" | "days" | "structureJson" | "aiPlanJson" | "createdAt" | "updatedAt", ExtArgs["result"]["programTemplate"]>
  export type ProgramTemplateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ProgramTemplate$userArgs<ExtArgs>
  }
  export type ProgramTemplateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ProgramTemplate$userArgs<ExtArgs>
  }
  export type ProgramTemplateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ProgramTemplate$userArgs<ExtArgs>
  }

  export type $ProgramTemplatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProgramTemplate"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string | null
      name: string
      goal: $Enums.ProgramGoal | null
      length: number
      days: number
      structureJson: Prisma.JsonValue | null
      aiPlanJson: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["programTemplate"]>
    composites: {}
  }

  type ProgramTemplateGetPayload<S extends boolean | null | undefined | ProgramTemplateDefaultArgs> = $Result.GetResult<Prisma.$ProgramTemplatePayload, S>

  type ProgramTemplateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProgramTemplateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProgramTemplateCountAggregateInputType | true
    }

  export interface ProgramTemplateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProgramTemplate'], meta: { name: 'ProgramTemplate' } }
    /**
     * Find zero or one ProgramTemplate that matches the filter.
     * @param {ProgramTemplateFindUniqueArgs} args - Arguments to find a ProgramTemplate
     * @example
     * // Get one ProgramTemplate
     * const programTemplate = await prisma.programTemplate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProgramTemplateFindUniqueArgs>(args: SelectSubset<T, ProgramTemplateFindUniqueArgs<ExtArgs>>): Prisma__ProgramTemplateClient<$Result.GetResult<Prisma.$ProgramTemplatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProgramTemplate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProgramTemplateFindUniqueOrThrowArgs} args - Arguments to find a ProgramTemplate
     * @example
     * // Get one ProgramTemplate
     * const programTemplate = await prisma.programTemplate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProgramTemplateFindUniqueOrThrowArgs>(args: SelectSubset<T, ProgramTemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProgramTemplateClient<$Result.GetResult<Prisma.$ProgramTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProgramTemplate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramTemplateFindFirstArgs} args - Arguments to find a ProgramTemplate
     * @example
     * // Get one ProgramTemplate
     * const programTemplate = await prisma.programTemplate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProgramTemplateFindFirstArgs>(args?: SelectSubset<T, ProgramTemplateFindFirstArgs<ExtArgs>>): Prisma__ProgramTemplateClient<$Result.GetResult<Prisma.$ProgramTemplatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProgramTemplate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramTemplateFindFirstOrThrowArgs} args - Arguments to find a ProgramTemplate
     * @example
     * // Get one ProgramTemplate
     * const programTemplate = await prisma.programTemplate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProgramTemplateFindFirstOrThrowArgs>(args?: SelectSubset<T, ProgramTemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProgramTemplateClient<$Result.GetResult<Prisma.$ProgramTemplatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProgramTemplates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramTemplateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProgramTemplates
     * const programTemplates = await prisma.programTemplate.findMany()
     * 
     * // Get first 10 ProgramTemplates
     * const programTemplates = await prisma.programTemplate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const programTemplateWithIdOnly = await prisma.programTemplate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProgramTemplateFindManyArgs>(args?: SelectSubset<T, ProgramTemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgramTemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProgramTemplate.
     * @param {ProgramTemplateCreateArgs} args - Arguments to create a ProgramTemplate.
     * @example
     * // Create one ProgramTemplate
     * const ProgramTemplate = await prisma.programTemplate.create({
     *   data: {
     *     // ... data to create a ProgramTemplate
     *   }
     * })
     * 
     */
    create<T extends ProgramTemplateCreateArgs>(args: SelectSubset<T, ProgramTemplateCreateArgs<ExtArgs>>): Prisma__ProgramTemplateClient<$Result.GetResult<Prisma.$ProgramTemplatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProgramTemplates.
     * @param {ProgramTemplateCreateManyArgs} args - Arguments to create many ProgramTemplates.
     * @example
     * // Create many ProgramTemplates
     * const programTemplate = await prisma.programTemplate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProgramTemplateCreateManyArgs>(args?: SelectSubset<T, ProgramTemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProgramTemplates and returns the data saved in the database.
     * @param {ProgramTemplateCreateManyAndReturnArgs} args - Arguments to create many ProgramTemplates.
     * @example
     * // Create many ProgramTemplates
     * const programTemplate = await prisma.programTemplate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProgramTemplates and only return the `id`
     * const programTemplateWithIdOnly = await prisma.programTemplate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProgramTemplateCreateManyAndReturnArgs>(args?: SelectSubset<T, ProgramTemplateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgramTemplatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProgramTemplate.
     * @param {ProgramTemplateDeleteArgs} args - Arguments to delete one ProgramTemplate.
     * @example
     * // Delete one ProgramTemplate
     * const ProgramTemplate = await prisma.programTemplate.delete({
     *   where: {
     *     // ... filter to delete one ProgramTemplate
     *   }
     * })
     * 
     */
    delete<T extends ProgramTemplateDeleteArgs>(args: SelectSubset<T, ProgramTemplateDeleteArgs<ExtArgs>>): Prisma__ProgramTemplateClient<$Result.GetResult<Prisma.$ProgramTemplatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProgramTemplate.
     * @param {ProgramTemplateUpdateArgs} args - Arguments to update one ProgramTemplate.
     * @example
     * // Update one ProgramTemplate
     * const programTemplate = await prisma.programTemplate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProgramTemplateUpdateArgs>(args: SelectSubset<T, ProgramTemplateUpdateArgs<ExtArgs>>): Prisma__ProgramTemplateClient<$Result.GetResult<Prisma.$ProgramTemplatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProgramTemplates.
     * @param {ProgramTemplateDeleteManyArgs} args - Arguments to filter ProgramTemplates to delete.
     * @example
     * // Delete a few ProgramTemplates
     * const { count } = await prisma.programTemplate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProgramTemplateDeleteManyArgs>(args?: SelectSubset<T, ProgramTemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProgramTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramTemplateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProgramTemplates
     * const programTemplate = await prisma.programTemplate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProgramTemplateUpdateManyArgs>(args: SelectSubset<T, ProgramTemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProgramTemplates and returns the data updated in the database.
     * @param {ProgramTemplateUpdateManyAndReturnArgs} args - Arguments to update many ProgramTemplates.
     * @example
     * // Update many ProgramTemplates
     * const programTemplate = await prisma.programTemplate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProgramTemplates and only return the `id`
     * const programTemplateWithIdOnly = await prisma.programTemplate.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProgramTemplateUpdateManyAndReturnArgs>(args: SelectSubset<T, ProgramTemplateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgramTemplatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProgramTemplate.
     * @param {ProgramTemplateUpsertArgs} args - Arguments to update or create a ProgramTemplate.
     * @example
     * // Update or create a ProgramTemplate
     * const programTemplate = await prisma.programTemplate.upsert({
     *   create: {
     *     // ... data to create a ProgramTemplate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProgramTemplate we want to update
     *   }
     * })
     */
    upsert<T extends ProgramTemplateUpsertArgs>(args: SelectSubset<T, ProgramTemplateUpsertArgs<ExtArgs>>): Prisma__ProgramTemplateClient<$Result.GetResult<Prisma.$ProgramTemplatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProgramTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramTemplateCountArgs} args - Arguments to filter ProgramTemplates to count.
     * @example
     * // Count the number of ProgramTemplates
     * const count = await prisma.programTemplate.count({
     *   where: {
     *     // ... the filter for the ProgramTemplates we want to count
     *   }
     * })
    **/
    count<T extends ProgramTemplateCountArgs>(
      args?: Subset<T, ProgramTemplateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProgramTemplateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProgramTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramTemplateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProgramTemplateAggregateArgs>(args: Subset<T, ProgramTemplateAggregateArgs>): Prisma.PrismaPromise<GetProgramTemplateAggregateType<T>>

    /**
     * Group by ProgramTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramTemplateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProgramTemplateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProgramTemplateGroupByArgs['orderBy'] }
        : { orderBy?: ProgramTemplateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProgramTemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProgramTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProgramTemplate model
   */
  readonly fields: ProgramTemplateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProgramTemplate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProgramTemplateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends ProgramTemplate$userArgs<ExtArgs> = {}>(args?: Subset<T, ProgramTemplate$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProgramTemplate model
   */
  interface ProgramTemplateFieldRefs {
    readonly id: FieldRef<"ProgramTemplate", 'String'>
    readonly userId: FieldRef<"ProgramTemplate", 'String'>
    readonly name: FieldRef<"ProgramTemplate", 'String'>
    readonly goal: FieldRef<"ProgramTemplate", 'ProgramGoal'>
    readonly length: FieldRef<"ProgramTemplate", 'Int'>
    readonly days: FieldRef<"ProgramTemplate", 'Int'>
    readonly structureJson: FieldRef<"ProgramTemplate", 'Json'>
    readonly aiPlanJson: FieldRef<"ProgramTemplate", 'Json'>
    readonly createdAt: FieldRef<"ProgramTemplate", 'DateTime'>
    readonly updatedAt: FieldRef<"ProgramTemplate", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProgramTemplate findUnique
   */
  export type ProgramTemplateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramTemplate
     */
    select?: ProgramTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramTemplate
     */
    omit?: ProgramTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramTemplateInclude<ExtArgs> | null
    /**
     * Filter, which ProgramTemplate to fetch.
     */
    where: ProgramTemplateWhereUniqueInput
  }

  /**
   * ProgramTemplate findUniqueOrThrow
   */
  export type ProgramTemplateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramTemplate
     */
    select?: ProgramTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramTemplate
     */
    omit?: ProgramTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramTemplateInclude<ExtArgs> | null
    /**
     * Filter, which ProgramTemplate to fetch.
     */
    where: ProgramTemplateWhereUniqueInput
  }

  /**
   * ProgramTemplate findFirst
   */
  export type ProgramTemplateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramTemplate
     */
    select?: ProgramTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramTemplate
     */
    omit?: ProgramTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramTemplateInclude<ExtArgs> | null
    /**
     * Filter, which ProgramTemplate to fetch.
     */
    where?: ProgramTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgramTemplates to fetch.
     */
    orderBy?: ProgramTemplateOrderByWithRelationInput | ProgramTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProgramTemplates.
     */
    cursor?: ProgramTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgramTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgramTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProgramTemplates.
     */
    distinct?: ProgramTemplateScalarFieldEnum | ProgramTemplateScalarFieldEnum[]
  }

  /**
   * ProgramTemplate findFirstOrThrow
   */
  export type ProgramTemplateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramTemplate
     */
    select?: ProgramTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramTemplate
     */
    omit?: ProgramTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramTemplateInclude<ExtArgs> | null
    /**
     * Filter, which ProgramTemplate to fetch.
     */
    where?: ProgramTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgramTemplates to fetch.
     */
    orderBy?: ProgramTemplateOrderByWithRelationInput | ProgramTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProgramTemplates.
     */
    cursor?: ProgramTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgramTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgramTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProgramTemplates.
     */
    distinct?: ProgramTemplateScalarFieldEnum | ProgramTemplateScalarFieldEnum[]
  }

  /**
   * ProgramTemplate findMany
   */
  export type ProgramTemplateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramTemplate
     */
    select?: ProgramTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramTemplate
     */
    omit?: ProgramTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramTemplateInclude<ExtArgs> | null
    /**
     * Filter, which ProgramTemplates to fetch.
     */
    where?: ProgramTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgramTemplates to fetch.
     */
    orderBy?: ProgramTemplateOrderByWithRelationInput | ProgramTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProgramTemplates.
     */
    cursor?: ProgramTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgramTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgramTemplates.
     */
    skip?: number
    distinct?: ProgramTemplateScalarFieldEnum | ProgramTemplateScalarFieldEnum[]
  }

  /**
   * ProgramTemplate create
   */
  export type ProgramTemplateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramTemplate
     */
    select?: ProgramTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramTemplate
     */
    omit?: ProgramTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramTemplateInclude<ExtArgs> | null
    /**
     * The data needed to create a ProgramTemplate.
     */
    data: XOR<ProgramTemplateCreateInput, ProgramTemplateUncheckedCreateInput>
  }

  /**
   * ProgramTemplate createMany
   */
  export type ProgramTemplateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProgramTemplates.
     */
    data: ProgramTemplateCreateManyInput | ProgramTemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProgramTemplate createManyAndReturn
   */
  export type ProgramTemplateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramTemplate
     */
    select?: ProgramTemplateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramTemplate
     */
    omit?: ProgramTemplateOmit<ExtArgs> | null
    /**
     * The data used to create many ProgramTemplates.
     */
    data: ProgramTemplateCreateManyInput | ProgramTemplateCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramTemplateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProgramTemplate update
   */
  export type ProgramTemplateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramTemplate
     */
    select?: ProgramTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramTemplate
     */
    omit?: ProgramTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramTemplateInclude<ExtArgs> | null
    /**
     * The data needed to update a ProgramTemplate.
     */
    data: XOR<ProgramTemplateUpdateInput, ProgramTemplateUncheckedUpdateInput>
    /**
     * Choose, which ProgramTemplate to update.
     */
    where: ProgramTemplateWhereUniqueInput
  }

  /**
   * ProgramTemplate updateMany
   */
  export type ProgramTemplateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProgramTemplates.
     */
    data: XOR<ProgramTemplateUpdateManyMutationInput, ProgramTemplateUncheckedUpdateManyInput>
    /**
     * Filter which ProgramTemplates to update
     */
    where?: ProgramTemplateWhereInput
    /**
     * Limit how many ProgramTemplates to update.
     */
    limit?: number
  }

  /**
   * ProgramTemplate updateManyAndReturn
   */
  export type ProgramTemplateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramTemplate
     */
    select?: ProgramTemplateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramTemplate
     */
    omit?: ProgramTemplateOmit<ExtArgs> | null
    /**
     * The data used to update ProgramTemplates.
     */
    data: XOR<ProgramTemplateUpdateManyMutationInput, ProgramTemplateUncheckedUpdateManyInput>
    /**
     * Filter which ProgramTemplates to update
     */
    where?: ProgramTemplateWhereInput
    /**
     * Limit how many ProgramTemplates to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramTemplateIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProgramTemplate upsert
   */
  export type ProgramTemplateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramTemplate
     */
    select?: ProgramTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramTemplate
     */
    omit?: ProgramTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramTemplateInclude<ExtArgs> | null
    /**
     * The filter to search for the ProgramTemplate to update in case it exists.
     */
    where: ProgramTemplateWhereUniqueInput
    /**
     * In case the ProgramTemplate found by the `where` argument doesn't exist, create a new ProgramTemplate with this data.
     */
    create: XOR<ProgramTemplateCreateInput, ProgramTemplateUncheckedCreateInput>
    /**
     * In case the ProgramTemplate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProgramTemplateUpdateInput, ProgramTemplateUncheckedUpdateInput>
  }

  /**
   * ProgramTemplate delete
   */
  export type ProgramTemplateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramTemplate
     */
    select?: ProgramTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramTemplate
     */
    omit?: ProgramTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramTemplateInclude<ExtArgs> | null
    /**
     * Filter which ProgramTemplate to delete.
     */
    where: ProgramTemplateWhereUniqueInput
  }

  /**
   * ProgramTemplate deleteMany
   */
  export type ProgramTemplateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProgramTemplates to delete
     */
    where?: ProgramTemplateWhereInput
    /**
     * Limit how many ProgramTemplates to delete.
     */
    limit?: number
  }

  /**
   * ProgramTemplate.user
   */
  export type ProgramTemplate$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * ProgramTemplate without action
   */
  export type ProgramTemplateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramTemplate
     */
    select?: ProgramTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramTemplate
     */
    omit?: ProgramTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramTemplateInclude<ExtArgs> | null
  }


  /**
   * Model Week
   */

  export type AggregateWeek = {
    _count: WeekCountAggregateOutputType | null
    _avg: WeekAvgAggregateOutputType | null
    _sum: WeekSumAggregateOutputType | null
    _min: WeekMinAggregateOutputType | null
    _max: WeekMaxAggregateOutputType | null
  }

  export type WeekAvgAggregateOutputType = {
    weekNumber: number | null
  }

  export type WeekSumAggregateOutputType = {
    weekNumber: number | null
  }

  export type WeekMinAggregateOutputType = {
    id: string | null
    programId: string | null
    weekNumber: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WeekMaxAggregateOutputType = {
    id: string | null
    programId: string | null
    weekNumber: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WeekCountAggregateOutputType = {
    id: number
    programId: number
    weekNumber: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WeekAvgAggregateInputType = {
    weekNumber?: true
  }

  export type WeekSumAggregateInputType = {
    weekNumber?: true
  }

  export type WeekMinAggregateInputType = {
    id?: true
    programId?: true
    weekNumber?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WeekMaxAggregateInputType = {
    id?: true
    programId?: true
    weekNumber?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WeekCountAggregateInputType = {
    id?: true
    programId?: true
    weekNumber?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WeekAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Week to aggregate.
     */
    where?: WeekWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Weeks to fetch.
     */
    orderBy?: WeekOrderByWithRelationInput | WeekOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WeekWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Weeks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Weeks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Weeks
    **/
    _count?: true | WeekCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WeekAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WeekSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WeekMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WeekMaxAggregateInputType
  }

  export type GetWeekAggregateType<T extends WeekAggregateArgs> = {
        [P in keyof T & keyof AggregateWeek]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWeek[P]>
      : GetScalarType<T[P], AggregateWeek[P]>
  }




  export type WeekGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WeekWhereInput
    orderBy?: WeekOrderByWithAggregationInput | WeekOrderByWithAggregationInput[]
    by: WeekScalarFieldEnum[] | WeekScalarFieldEnum
    having?: WeekScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WeekCountAggregateInputType | true
    _avg?: WeekAvgAggregateInputType
    _sum?: WeekSumAggregateInputType
    _min?: WeekMinAggregateInputType
    _max?: WeekMaxAggregateInputType
  }

  export type WeekGroupByOutputType = {
    id: string
    programId: string
    weekNumber: number
    createdAt: Date
    updatedAt: Date
    _count: WeekCountAggregateOutputType | null
    _avg: WeekAvgAggregateOutputType | null
    _sum: WeekSumAggregateOutputType | null
    _min: WeekMinAggregateOutputType | null
    _max: WeekMaxAggregateOutputType | null
  }

  type GetWeekGroupByPayload<T extends WeekGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WeekGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WeekGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WeekGroupByOutputType[P]>
            : GetScalarType<T[P], WeekGroupByOutputType[P]>
        }
      >
    >


  export type WeekSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    programId?: boolean
    weekNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    program?: boolean | ProgramDefaultArgs<ExtArgs>
    workouts?: boolean | Week$workoutsArgs<ExtArgs>
    currentForProgram?: boolean | Week$currentForProgramArgs<ExtArgs>
    _count?: boolean | WeekCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["week"]>

  export type WeekSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    programId?: boolean
    weekNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    program?: boolean | ProgramDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["week"]>

  export type WeekSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    programId?: boolean
    weekNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    program?: boolean | ProgramDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["week"]>

  export type WeekSelectScalar = {
    id?: boolean
    programId?: boolean
    weekNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WeekOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "programId" | "weekNumber" | "createdAt" | "updatedAt", ExtArgs["result"]["week"]>
  export type WeekInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    program?: boolean | ProgramDefaultArgs<ExtArgs>
    workouts?: boolean | Week$workoutsArgs<ExtArgs>
    currentForProgram?: boolean | Week$currentForProgramArgs<ExtArgs>
    _count?: boolean | WeekCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WeekIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    program?: boolean | ProgramDefaultArgs<ExtArgs>
  }
  export type WeekIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    program?: boolean | ProgramDefaultArgs<ExtArgs>
  }

  export type $WeekPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Week"
    objects: {
      program: Prisma.$ProgramPayload<ExtArgs>
      workouts: Prisma.$WorkoutPayload<ExtArgs>[]
      currentForProgram: Prisma.$ProgramPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      programId: string
      weekNumber: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["week"]>
    composites: {}
  }

  type WeekGetPayload<S extends boolean | null | undefined | WeekDefaultArgs> = $Result.GetResult<Prisma.$WeekPayload, S>

  type WeekCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WeekFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WeekCountAggregateInputType | true
    }

  export interface WeekDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Week'], meta: { name: 'Week' } }
    /**
     * Find zero or one Week that matches the filter.
     * @param {WeekFindUniqueArgs} args - Arguments to find a Week
     * @example
     * // Get one Week
     * const week = await prisma.week.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WeekFindUniqueArgs>(args: SelectSubset<T, WeekFindUniqueArgs<ExtArgs>>): Prisma__WeekClient<$Result.GetResult<Prisma.$WeekPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Week that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WeekFindUniqueOrThrowArgs} args - Arguments to find a Week
     * @example
     * // Get one Week
     * const week = await prisma.week.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WeekFindUniqueOrThrowArgs>(args: SelectSubset<T, WeekFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WeekClient<$Result.GetResult<Prisma.$WeekPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Week that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeekFindFirstArgs} args - Arguments to find a Week
     * @example
     * // Get one Week
     * const week = await prisma.week.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WeekFindFirstArgs>(args?: SelectSubset<T, WeekFindFirstArgs<ExtArgs>>): Prisma__WeekClient<$Result.GetResult<Prisma.$WeekPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Week that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeekFindFirstOrThrowArgs} args - Arguments to find a Week
     * @example
     * // Get one Week
     * const week = await prisma.week.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WeekFindFirstOrThrowArgs>(args?: SelectSubset<T, WeekFindFirstOrThrowArgs<ExtArgs>>): Prisma__WeekClient<$Result.GetResult<Prisma.$WeekPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Weeks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeekFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Weeks
     * const weeks = await prisma.week.findMany()
     * 
     * // Get first 10 Weeks
     * const weeks = await prisma.week.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const weekWithIdOnly = await prisma.week.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WeekFindManyArgs>(args?: SelectSubset<T, WeekFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeekPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Week.
     * @param {WeekCreateArgs} args - Arguments to create a Week.
     * @example
     * // Create one Week
     * const Week = await prisma.week.create({
     *   data: {
     *     // ... data to create a Week
     *   }
     * })
     * 
     */
    create<T extends WeekCreateArgs>(args: SelectSubset<T, WeekCreateArgs<ExtArgs>>): Prisma__WeekClient<$Result.GetResult<Prisma.$WeekPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Weeks.
     * @param {WeekCreateManyArgs} args - Arguments to create many Weeks.
     * @example
     * // Create many Weeks
     * const week = await prisma.week.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WeekCreateManyArgs>(args?: SelectSubset<T, WeekCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Weeks and returns the data saved in the database.
     * @param {WeekCreateManyAndReturnArgs} args - Arguments to create many Weeks.
     * @example
     * // Create many Weeks
     * const week = await prisma.week.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Weeks and only return the `id`
     * const weekWithIdOnly = await prisma.week.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WeekCreateManyAndReturnArgs>(args?: SelectSubset<T, WeekCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeekPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Week.
     * @param {WeekDeleteArgs} args - Arguments to delete one Week.
     * @example
     * // Delete one Week
     * const Week = await prisma.week.delete({
     *   where: {
     *     // ... filter to delete one Week
     *   }
     * })
     * 
     */
    delete<T extends WeekDeleteArgs>(args: SelectSubset<T, WeekDeleteArgs<ExtArgs>>): Prisma__WeekClient<$Result.GetResult<Prisma.$WeekPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Week.
     * @param {WeekUpdateArgs} args - Arguments to update one Week.
     * @example
     * // Update one Week
     * const week = await prisma.week.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WeekUpdateArgs>(args: SelectSubset<T, WeekUpdateArgs<ExtArgs>>): Prisma__WeekClient<$Result.GetResult<Prisma.$WeekPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Weeks.
     * @param {WeekDeleteManyArgs} args - Arguments to filter Weeks to delete.
     * @example
     * // Delete a few Weeks
     * const { count } = await prisma.week.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WeekDeleteManyArgs>(args?: SelectSubset<T, WeekDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Weeks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeekUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Weeks
     * const week = await prisma.week.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WeekUpdateManyArgs>(args: SelectSubset<T, WeekUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Weeks and returns the data updated in the database.
     * @param {WeekUpdateManyAndReturnArgs} args - Arguments to update many Weeks.
     * @example
     * // Update many Weeks
     * const week = await prisma.week.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Weeks and only return the `id`
     * const weekWithIdOnly = await prisma.week.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WeekUpdateManyAndReturnArgs>(args: SelectSubset<T, WeekUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeekPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Week.
     * @param {WeekUpsertArgs} args - Arguments to update or create a Week.
     * @example
     * // Update or create a Week
     * const week = await prisma.week.upsert({
     *   create: {
     *     // ... data to create a Week
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Week we want to update
     *   }
     * })
     */
    upsert<T extends WeekUpsertArgs>(args: SelectSubset<T, WeekUpsertArgs<ExtArgs>>): Prisma__WeekClient<$Result.GetResult<Prisma.$WeekPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Weeks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeekCountArgs} args - Arguments to filter Weeks to count.
     * @example
     * // Count the number of Weeks
     * const count = await prisma.week.count({
     *   where: {
     *     // ... the filter for the Weeks we want to count
     *   }
     * })
    **/
    count<T extends WeekCountArgs>(
      args?: Subset<T, WeekCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WeekCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Week.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeekAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WeekAggregateArgs>(args: Subset<T, WeekAggregateArgs>): Prisma.PrismaPromise<GetWeekAggregateType<T>>

    /**
     * Group by Week.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeekGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WeekGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WeekGroupByArgs['orderBy'] }
        : { orderBy?: WeekGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WeekGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWeekGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Week model
   */
  readonly fields: WeekFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Week.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WeekClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    program<T extends ProgramDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProgramDefaultArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    workouts<T extends Week$workoutsArgs<ExtArgs> = {}>(args?: Subset<T, Week$workoutsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    currentForProgram<T extends Week$currentForProgramArgs<ExtArgs> = {}>(args?: Subset<T, Week$currentForProgramArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Week model
   */
  interface WeekFieldRefs {
    readonly id: FieldRef<"Week", 'String'>
    readonly programId: FieldRef<"Week", 'String'>
    readonly weekNumber: FieldRef<"Week", 'Int'>
    readonly createdAt: FieldRef<"Week", 'DateTime'>
    readonly updatedAt: FieldRef<"Week", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Week findUnique
   */
  export type WeekFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Week
     */
    select?: WeekSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Week
     */
    omit?: WeekOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeekInclude<ExtArgs> | null
    /**
     * Filter, which Week to fetch.
     */
    where: WeekWhereUniqueInput
  }

  /**
   * Week findUniqueOrThrow
   */
  export type WeekFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Week
     */
    select?: WeekSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Week
     */
    omit?: WeekOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeekInclude<ExtArgs> | null
    /**
     * Filter, which Week to fetch.
     */
    where: WeekWhereUniqueInput
  }

  /**
   * Week findFirst
   */
  export type WeekFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Week
     */
    select?: WeekSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Week
     */
    omit?: WeekOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeekInclude<ExtArgs> | null
    /**
     * Filter, which Week to fetch.
     */
    where?: WeekWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Weeks to fetch.
     */
    orderBy?: WeekOrderByWithRelationInput | WeekOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Weeks.
     */
    cursor?: WeekWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Weeks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Weeks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Weeks.
     */
    distinct?: WeekScalarFieldEnum | WeekScalarFieldEnum[]
  }

  /**
   * Week findFirstOrThrow
   */
  export type WeekFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Week
     */
    select?: WeekSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Week
     */
    omit?: WeekOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeekInclude<ExtArgs> | null
    /**
     * Filter, which Week to fetch.
     */
    where?: WeekWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Weeks to fetch.
     */
    orderBy?: WeekOrderByWithRelationInput | WeekOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Weeks.
     */
    cursor?: WeekWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Weeks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Weeks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Weeks.
     */
    distinct?: WeekScalarFieldEnum | WeekScalarFieldEnum[]
  }

  /**
   * Week findMany
   */
  export type WeekFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Week
     */
    select?: WeekSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Week
     */
    omit?: WeekOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeekInclude<ExtArgs> | null
    /**
     * Filter, which Weeks to fetch.
     */
    where?: WeekWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Weeks to fetch.
     */
    orderBy?: WeekOrderByWithRelationInput | WeekOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Weeks.
     */
    cursor?: WeekWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Weeks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Weeks.
     */
    skip?: number
    distinct?: WeekScalarFieldEnum | WeekScalarFieldEnum[]
  }

  /**
   * Week create
   */
  export type WeekCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Week
     */
    select?: WeekSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Week
     */
    omit?: WeekOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeekInclude<ExtArgs> | null
    /**
     * The data needed to create a Week.
     */
    data: XOR<WeekCreateInput, WeekUncheckedCreateInput>
  }

  /**
   * Week createMany
   */
  export type WeekCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Weeks.
     */
    data: WeekCreateManyInput | WeekCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Week createManyAndReturn
   */
  export type WeekCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Week
     */
    select?: WeekSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Week
     */
    omit?: WeekOmit<ExtArgs> | null
    /**
     * The data used to create many Weeks.
     */
    data: WeekCreateManyInput | WeekCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeekIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Week update
   */
  export type WeekUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Week
     */
    select?: WeekSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Week
     */
    omit?: WeekOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeekInclude<ExtArgs> | null
    /**
     * The data needed to update a Week.
     */
    data: XOR<WeekUpdateInput, WeekUncheckedUpdateInput>
    /**
     * Choose, which Week to update.
     */
    where: WeekWhereUniqueInput
  }

  /**
   * Week updateMany
   */
  export type WeekUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Weeks.
     */
    data: XOR<WeekUpdateManyMutationInput, WeekUncheckedUpdateManyInput>
    /**
     * Filter which Weeks to update
     */
    where?: WeekWhereInput
    /**
     * Limit how many Weeks to update.
     */
    limit?: number
  }

  /**
   * Week updateManyAndReturn
   */
  export type WeekUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Week
     */
    select?: WeekSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Week
     */
    omit?: WeekOmit<ExtArgs> | null
    /**
     * The data used to update Weeks.
     */
    data: XOR<WeekUpdateManyMutationInput, WeekUncheckedUpdateManyInput>
    /**
     * Filter which Weeks to update
     */
    where?: WeekWhereInput
    /**
     * Limit how many Weeks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeekIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Week upsert
   */
  export type WeekUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Week
     */
    select?: WeekSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Week
     */
    omit?: WeekOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeekInclude<ExtArgs> | null
    /**
     * The filter to search for the Week to update in case it exists.
     */
    where: WeekWhereUniqueInput
    /**
     * In case the Week found by the `where` argument doesn't exist, create a new Week with this data.
     */
    create: XOR<WeekCreateInput, WeekUncheckedCreateInput>
    /**
     * In case the Week was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WeekUpdateInput, WeekUncheckedUpdateInput>
  }

  /**
   * Week delete
   */
  export type WeekDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Week
     */
    select?: WeekSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Week
     */
    omit?: WeekOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeekInclude<ExtArgs> | null
    /**
     * Filter which Week to delete.
     */
    where: WeekWhereUniqueInput
  }

  /**
   * Week deleteMany
   */
  export type WeekDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Weeks to delete
     */
    where?: WeekWhereInput
    /**
     * Limit how many Weeks to delete.
     */
    limit?: number
  }

  /**
   * Week.workouts
   */
  export type Week$workoutsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    where?: WorkoutWhereInput
    orderBy?: WorkoutOrderByWithRelationInput | WorkoutOrderByWithRelationInput[]
    cursor?: WorkoutWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkoutScalarFieldEnum | WorkoutScalarFieldEnum[]
  }

  /**
   * Week.currentForProgram
   */
  export type Week$currentForProgramArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
    where?: ProgramWhereInput
  }

  /**
   * Week without action
   */
  export type WeekDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Week
     */
    select?: WeekSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Week
     */
    omit?: WeekOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeekInclude<ExtArgs> | null
  }


  /**
   * Model Workout
   */

  export type AggregateWorkout = {
    _count: WorkoutCountAggregateOutputType | null
    _avg: WorkoutAvgAggregateOutputType | null
    _sum: WorkoutSumAggregateOutputType | null
    _min: WorkoutMinAggregateOutputType | null
    _max: WorkoutMaxAggregateOutputType | null
  }

  export type WorkoutAvgAggregateOutputType = {
    dayNumber: number | null
  }

  export type WorkoutSumAggregateOutputType = {
    dayNumber: number | null
  }

  export type WorkoutMinAggregateOutputType = {
    id: string | null
    weekId: string | null
    dayNumber: number | null
    name: string | null
    mode: $Enums.WorkoutMode | null
    notes: string | null
    currentExerciseId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    completed: boolean | null
  }

  export type WorkoutMaxAggregateOutputType = {
    id: string | null
    weekId: string | null
    dayNumber: number | null
    name: string | null
    mode: $Enums.WorkoutMode | null
    notes: string | null
    currentExerciseId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    completed: boolean | null
  }

  export type WorkoutCountAggregateOutputType = {
    id: number
    weekId: number
    dayNumber: number
    name: number
    mode: number
    focusMuscleGroups: number
    notes: number
    currentExerciseId: number
    createdAt: number
    updatedAt: number
    completed: number
    _all: number
  }


  export type WorkoutAvgAggregateInputType = {
    dayNumber?: true
  }

  export type WorkoutSumAggregateInputType = {
    dayNumber?: true
  }

  export type WorkoutMinAggregateInputType = {
    id?: true
    weekId?: true
    dayNumber?: true
    name?: true
    mode?: true
    notes?: true
    currentExerciseId?: true
    createdAt?: true
    updatedAt?: true
    completed?: true
  }

  export type WorkoutMaxAggregateInputType = {
    id?: true
    weekId?: true
    dayNumber?: true
    name?: true
    mode?: true
    notes?: true
    currentExerciseId?: true
    createdAt?: true
    updatedAt?: true
    completed?: true
  }

  export type WorkoutCountAggregateInputType = {
    id?: true
    weekId?: true
    dayNumber?: true
    name?: true
    mode?: true
    focusMuscleGroups?: true
    notes?: true
    currentExerciseId?: true
    createdAt?: true
    updatedAt?: true
    completed?: true
    _all?: true
  }

  export type WorkoutAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Workout to aggregate.
     */
    where?: WorkoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workouts to fetch.
     */
    orderBy?: WorkoutOrderByWithRelationInput | WorkoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Workouts
    **/
    _count?: true | WorkoutCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkoutAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkoutSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkoutMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkoutMaxAggregateInputType
  }

  export type GetWorkoutAggregateType<T extends WorkoutAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkout]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkout[P]>
      : GetScalarType<T[P], AggregateWorkout[P]>
  }




  export type WorkoutGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutWhereInput
    orderBy?: WorkoutOrderByWithAggregationInput | WorkoutOrderByWithAggregationInput[]
    by: WorkoutScalarFieldEnum[] | WorkoutScalarFieldEnum
    having?: WorkoutScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkoutCountAggregateInputType | true
    _avg?: WorkoutAvgAggregateInputType
    _sum?: WorkoutSumAggregateInputType
    _min?: WorkoutMinAggregateInputType
    _max?: WorkoutMaxAggregateInputType
  }

  export type WorkoutGroupByOutputType = {
    id: string
    weekId: string
    dayNumber: number
    name: string
    mode: $Enums.WorkoutMode
    focusMuscleGroups: string[]
    notes: string | null
    currentExerciseId: string | null
    createdAt: Date
    updatedAt: Date
    completed: boolean
    _count: WorkoutCountAggregateOutputType | null
    _avg: WorkoutAvgAggregateOutputType | null
    _sum: WorkoutSumAggregateOutputType | null
    _min: WorkoutMinAggregateOutputType | null
    _max: WorkoutMaxAggregateOutputType | null
  }

  type GetWorkoutGroupByPayload<T extends WorkoutGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkoutGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkoutGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkoutGroupByOutputType[P]>
            : GetScalarType<T[P], WorkoutGroupByOutputType[P]>
        }
      >
    >


  export type WorkoutSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    weekId?: boolean
    dayNumber?: boolean
    name?: boolean
    mode?: boolean
    focusMuscleGroups?: boolean
    notes?: boolean
    currentExerciseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    completed?: boolean
    week?: boolean | WeekDefaultArgs<ExtArgs>
    exercises?: boolean | Workout$exercisesArgs<ExtArgs>
    currentExercise?: boolean | Workout$currentExerciseArgs<ExtArgs>
    _count?: boolean | WorkoutCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workout"]>

  export type WorkoutSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    weekId?: boolean
    dayNumber?: boolean
    name?: boolean
    mode?: boolean
    focusMuscleGroups?: boolean
    notes?: boolean
    currentExerciseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    completed?: boolean
    week?: boolean | WeekDefaultArgs<ExtArgs>
    currentExercise?: boolean | Workout$currentExerciseArgs<ExtArgs>
  }, ExtArgs["result"]["workout"]>

  export type WorkoutSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    weekId?: boolean
    dayNumber?: boolean
    name?: boolean
    mode?: boolean
    focusMuscleGroups?: boolean
    notes?: boolean
    currentExerciseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    completed?: boolean
    week?: boolean | WeekDefaultArgs<ExtArgs>
    currentExercise?: boolean | Workout$currentExerciseArgs<ExtArgs>
  }, ExtArgs["result"]["workout"]>

  export type WorkoutSelectScalar = {
    id?: boolean
    weekId?: boolean
    dayNumber?: boolean
    name?: boolean
    mode?: boolean
    focusMuscleGroups?: boolean
    notes?: boolean
    currentExerciseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    completed?: boolean
  }

  export type WorkoutOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "weekId" | "dayNumber" | "name" | "mode" | "focusMuscleGroups" | "notes" | "currentExerciseId" | "createdAt" | "updatedAt" | "completed", ExtArgs["result"]["workout"]>
  export type WorkoutInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    week?: boolean | WeekDefaultArgs<ExtArgs>
    exercises?: boolean | Workout$exercisesArgs<ExtArgs>
    currentExercise?: boolean | Workout$currentExerciseArgs<ExtArgs>
    _count?: boolean | WorkoutCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WorkoutIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    week?: boolean | WeekDefaultArgs<ExtArgs>
    currentExercise?: boolean | Workout$currentExerciseArgs<ExtArgs>
  }
  export type WorkoutIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    week?: boolean | WeekDefaultArgs<ExtArgs>
    currentExercise?: boolean | Workout$currentExerciseArgs<ExtArgs>
  }

  export type $WorkoutPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Workout"
    objects: {
      week: Prisma.$WeekPayload<ExtArgs>
      exercises: Prisma.$ExercisePayload<ExtArgs>[]
      currentExercise: Prisma.$ExercisePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      weekId: string
      dayNumber: number
      name: string
      mode: $Enums.WorkoutMode
      focusMuscleGroups: string[]
      notes: string | null
      currentExerciseId: string | null
      createdAt: Date
      updatedAt: Date
      completed: boolean
    }, ExtArgs["result"]["workout"]>
    composites: {}
  }

  type WorkoutGetPayload<S extends boolean | null | undefined | WorkoutDefaultArgs> = $Result.GetResult<Prisma.$WorkoutPayload, S>

  type WorkoutCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkoutFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkoutCountAggregateInputType | true
    }

  export interface WorkoutDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Workout'], meta: { name: 'Workout' } }
    /**
     * Find zero or one Workout that matches the filter.
     * @param {WorkoutFindUniqueArgs} args - Arguments to find a Workout
     * @example
     * // Get one Workout
     * const workout = await prisma.workout.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkoutFindUniqueArgs>(args: SelectSubset<T, WorkoutFindUniqueArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Workout that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkoutFindUniqueOrThrowArgs} args - Arguments to find a Workout
     * @example
     * // Get one Workout
     * const workout = await prisma.workout.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkoutFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkoutFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workout that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutFindFirstArgs} args - Arguments to find a Workout
     * @example
     * // Get one Workout
     * const workout = await prisma.workout.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkoutFindFirstArgs>(args?: SelectSubset<T, WorkoutFindFirstArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workout that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutFindFirstOrThrowArgs} args - Arguments to find a Workout
     * @example
     * // Get one Workout
     * const workout = await prisma.workout.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkoutFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkoutFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Workouts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Workouts
     * const workouts = await prisma.workout.findMany()
     * 
     * // Get first 10 Workouts
     * const workouts = await prisma.workout.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workoutWithIdOnly = await prisma.workout.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkoutFindManyArgs>(args?: SelectSubset<T, WorkoutFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Workout.
     * @param {WorkoutCreateArgs} args - Arguments to create a Workout.
     * @example
     * // Create one Workout
     * const Workout = await prisma.workout.create({
     *   data: {
     *     // ... data to create a Workout
     *   }
     * })
     * 
     */
    create<T extends WorkoutCreateArgs>(args: SelectSubset<T, WorkoutCreateArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Workouts.
     * @param {WorkoutCreateManyArgs} args - Arguments to create many Workouts.
     * @example
     * // Create many Workouts
     * const workout = await prisma.workout.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkoutCreateManyArgs>(args?: SelectSubset<T, WorkoutCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Workouts and returns the data saved in the database.
     * @param {WorkoutCreateManyAndReturnArgs} args - Arguments to create many Workouts.
     * @example
     * // Create many Workouts
     * const workout = await prisma.workout.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Workouts and only return the `id`
     * const workoutWithIdOnly = await prisma.workout.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkoutCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkoutCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Workout.
     * @param {WorkoutDeleteArgs} args - Arguments to delete one Workout.
     * @example
     * // Delete one Workout
     * const Workout = await prisma.workout.delete({
     *   where: {
     *     // ... filter to delete one Workout
     *   }
     * })
     * 
     */
    delete<T extends WorkoutDeleteArgs>(args: SelectSubset<T, WorkoutDeleteArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Workout.
     * @param {WorkoutUpdateArgs} args - Arguments to update one Workout.
     * @example
     * // Update one Workout
     * const workout = await prisma.workout.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkoutUpdateArgs>(args: SelectSubset<T, WorkoutUpdateArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Workouts.
     * @param {WorkoutDeleteManyArgs} args - Arguments to filter Workouts to delete.
     * @example
     * // Delete a few Workouts
     * const { count } = await prisma.workout.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkoutDeleteManyArgs>(args?: SelectSubset<T, WorkoutDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Workouts
     * const workout = await prisma.workout.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkoutUpdateManyArgs>(args: SelectSubset<T, WorkoutUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workouts and returns the data updated in the database.
     * @param {WorkoutUpdateManyAndReturnArgs} args - Arguments to update many Workouts.
     * @example
     * // Update many Workouts
     * const workout = await prisma.workout.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Workouts and only return the `id`
     * const workoutWithIdOnly = await prisma.workout.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorkoutUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkoutUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Workout.
     * @param {WorkoutUpsertArgs} args - Arguments to update or create a Workout.
     * @example
     * // Update or create a Workout
     * const workout = await prisma.workout.upsert({
     *   create: {
     *     // ... data to create a Workout
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Workout we want to update
     *   }
     * })
     */
    upsert<T extends WorkoutUpsertArgs>(args: SelectSubset<T, WorkoutUpsertArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Workouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutCountArgs} args - Arguments to filter Workouts to count.
     * @example
     * // Count the number of Workouts
     * const count = await prisma.workout.count({
     *   where: {
     *     // ... the filter for the Workouts we want to count
     *   }
     * })
    **/
    count<T extends WorkoutCountArgs>(
      args?: Subset<T, WorkoutCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkoutCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Workout.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkoutAggregateArgs>(args: Subset<T, WorkoutAggregateArgs>): Prisma.PrismaPromise<GetWorkoutAggregateType<T>>

    /**
     * Group by Workout.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkoutGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkoutGroupByArgs['orderBy'] }
        : { orderBy?: WorkoutGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkoutGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkoutGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Workout model
   */
  readonly fields: WorkoutFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Workout.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkoutClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    week<T extends WeekDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WeekDefaultArgs<ExtArgs>>): Prisma__WeekClient<$Result.GetResult<Prisma.$WeekPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    exercises<T extends Workout$exercisesArgs<ExtArgs> = {}>(args?: Subset<T, Workout$exercisesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    currentExercise<T extends Workout$currentExerciseArgs<ExtArgs> = {}>(args?: Subset<T, Workout$currentExerciseArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Workout model
   */
  interface WorkoutFieldRefs {
    readonly id: FieldRef<"Workout", 'String'>
    readonly weekId: FieldRef<"Workout", 'String'>
    readonly dayNumber: FieldRef<"Workout", 'Int'>
    readonly name: FieldRef<"Workout", 'String'>
    readonly mode: FieldRef<"Workout", 'WorkoutMode'>
    readonly focusMuscleGroups: FieldRef<"Workout", 'String[]'>
    readonly notes: FieldRef<"Workout", 'String'>
    readonly currentExerciseId: FieldRef<"Workout", 'String'>
    readonly createdAt: FieldRef<"Workout", 'DateTime'>
    readonly updatedAt: FieldRef<"Workout", 'DateTime'>
    readonly completed: FieldRef<"Workout", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Workout findUnique
   */
  export type WorkoutFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * Filter, which Workout to fetch.
     */
    where: WorkoutWhereUniqueInput
  }

  /**
   * Workout findUniqueOrThrow
   */
  export type WorkoutFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * Filter, which Workout to fetch.
     */
    where: WorkoutWhereUniqueInput
  }

  /**
   * Workout findFirst
   */
  export type WorkoutFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * Filter, which Workout to fetch.
     */
    where?: WorkoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workouts to fetch.
     */
    orderBy?: WorkoutOrderByWithRelationInput | WorkoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workouts.
     */
    cursor?: WorkoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workouts.
     */
    distinct?: WorkoutScalarFieldEnum | WorkoutScalarFieldEnum[]
  }

  /**
   * Workout findFirstOrThrow
   */
  export type WorkoutFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * Filter, which Workout to fetch.
     */
    where?: WorkoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workouts to fetch.
     */
    orderBy?: WorkoutOrderByWithRelationInput | WorkoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workouts.
     */
    cursor?: WorkoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workouts.
     */
    distinct?: WorkoutScalarFieldEnum | WorkoutScalarFieldEnum[]
  }

  /**
   * Workout findMany
   */
  export type WorkoutFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * Filter, which Workouts to fetch.
     */
    where?: WorkoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workouts to fetch.
     */
    orderBy?: WorkoutOrderByWithRelationInput | WorkoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Workouts.
     */
    cursor?: WorkoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workouts.
     */
    skip?: number
    distinct?: WorkoutScalarFieldEnum | WorkoutScalarFieldEnum[]
  }

  /**
   * Workout create
   */
  export type WorkoutCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * The data needed to create a Workout.
     */
    data: XOR<WorkoutCreateInput, WorkoutUncheckedCreateInput>
  }

  /**
   * Workout createMany
   */
  export type WorkoutCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Workouts.
     */
    data: WorkoutCreateManyInput | WorkoutCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Workout createManyAndReturn
   */
  export type WorkoutCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * The data used to create many Workouts.
     */
    data: WorkoutCreateManyInput | WorkoutCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Workout update
   */
  export type WorkoutUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * The data needed to update a Workout.
     */
    data: XOR<WorkoutUpdateInput, WorkoutUncheckedUpdateInput>
    /**
     * Choose, which Workout to update.
     */
    where: WorkoutWhereUniqueInput
  }

  /**
   * Workout updateMany
   */
  export type WorkoutUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Workouts.
     */
    data: XOR<WorkoutUpdateManyMutationInput, WorkoutUncheckedUpdateManyInput>
    /**
     * Filter which Workouts to update
     */
    where?: WorkoutWhereInput
    /**
     * Limit how many Workouts to update.
     */
    limit?: number
  }

  /**
   * Workout updateManyAndReturn
   */
  export type WorkoutUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * The data used to update Workouts.
     */
    data: XOR<WorkoutUpdateManyMutationInput, WorkoutUncheckedUpdateManyInput>
    /**
     * Filter which Workouts to update
     */
    where?: WorkoutWhereInput
    /**
     * Limit how many Workouts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Workout upsert
   */
  export type WorkoutUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * The filter to search for the Workout to update in case it exists.
     */
    where: WorkoutWhereUniqueInput
    /**
     * In case the Workout found by the `where` argument doesn't exist, create a new Workout with this data.
     */
    create: XOR<WorkoutCreateInput, WorkoutUncheckedCreateInput>
    /**
     * In case the Workout was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkoutUpdateInput, WorkoutUncheckedUpdateInput>
  }

  /**
   * Workout delete
   */
  export type WorkoutDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * Filter which Workout to delete.
     */
    where: WorkoutWhereUniqueInput
  }

  /**
   * Workout deleteMany
   */
  export type WorkoutDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Workouts to delete
     */
    where?: WorkoutWhereInput
    /**
     * Limit how many Workouts to delete.
     */
    limit?: number
  }

  /**
   * Workout.exercises
   */
  export type Workout$exercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    where?: ExerciseWhereInput
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    cursor?: ExerciseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExerciseScalarFieldEnum | ExerciseScalarFieldEnum[]
  }

  /**
   * Workout.currentExercise
   */
  export type Workout$currentExerciseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    where?: ExerciseWhereInput
  }

  /**
   * Workout without action
   */
  export type WorkoutDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
  }


  /**
   * Model ExerciseTemplate
   */

  export type AggregateExerciseTemplate = {
    _count: ExerciseTemplateCountAggregateOutputType | null
    _avg: ExerciseTemplateAvgAggregateOutputType | null
    _sum: ExerciseTemplateSumAggregateOutputType | null
    _min: ExerciseTemplateMinAggregateOutputType | null
    _max: ExerciseTemplateMaxAggregateOutputType | null
  }

  export type ExerciseTemplateAvgAggregateOutputType = {
    defaultSets: number | null
    defaultRepsLower: number | null
    defaultRepsUpper: number | null
    defaultRir: number | null
  }

  export type ExerciseTemplateSumAggregateOutputType = {
    defaultSets: number | null
    defaultRepsLower: number | null
    defaultRepsUpper: number | null
    defaultRir: number | null
  }

  export type ExerciseTemplateMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    description: string | null
    muscleGroupId: string | null
    defaultSets: number | null
    defaultRepsLower: number | null
    defaultRepsUpper: number | null
    defaultRir: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExerciseTemplateMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    description: string | null
    muscleGroupId: string | null
    defaultSets: number | null
    defaultRepsLower: number | null
    defaultRepsUpper: number | null
    defaultRir: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExerciseTemplateCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    description: number
    muscleGroupId: number
    defaultSets: number
    defaultRepsLower: number
    defaultRepsUpper: number
    defaultRir: number
    defaultDetails: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ExerciseTemplateAvgAggregateInputType = {
    defaultSets?: true
    defaultRepsLower?: true
    defaultRepsUpper?: true
    defaultRir?: true
  }

  export type ExerciseTemplateSumAggregateInputType = {
    defaultSets?: true
    defaultRepsLower?: true
    defaultRepsUpper?: true
    defaultRir?: true
  }

  export type ExerciseTemplateMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    description?: true
    muscleGroupId?: true
    defaultSets?: true
    defaultRepsLower?: true
    defaultRepsUpper?: true
    defaultRir?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExerciseTemplateMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    description?: true
    muscleGroupId?: true
    defaultSets?: true
    defaultRepsLower?: true
    defaultRepsUpper?: true
    defaultRir?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExerciseTemplateCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    description?: true
    muscleGroupId?: true
    defaultSets?: true
    defaultRepsLower?: true
    defaultRepsUpper?: true
    defaultRir?: true
    defaultDetails?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ExerciseTemplateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExerciseTemplate to aggregate.
     */
    where?: ExerciseTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExerciseTemplates to fetch.
     */
    orderBy?: ExerciseTemplateOrderByWithRelationInput | ExerciseTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExerciseTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExerciseTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExerciseTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExerciseTemplates
    **/
    _count?: true | ExerciseTemplateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExerciseTemplateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExerciseTemplateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExerciseTemplateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExerciseTemplateMaxAggregateInputType
  }

  export type GetExerciseTemplateAggregateType<T extends ExerciseTemplateAggregateArgs> = {
        [P in keyof T & keyof AggregateExerciseTemplate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExerciseTemplate[P]>
      : GetScalarType<T[P], AggregateExerciseTemplate[P]>
  }




  export type ExerciseTemplateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExerciseTemplateWhereInput
    orderBy?: ExerciseTemplateOrderByWithAggregationInput | ExerciseTemplateOrderByWithAggregationInput[]
    by: ExerciseTemplateScalarFieldEnum[] | ExerciseTemplateScalarFieldEnum
    having?: ExerciseTemplateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExerciseTemplateCountAggregateInputType | true
    _avg?: ExerciseTemplateAvgAggregateInputType
    _sum?: ExerciseTemplateSumAggregateInputType
    _min?: ExerciseTemplateMinAggregateInputType
    _max?: ExerciseTemplateMaxAggregateInputType
  }

  export type ExerciseTemplateGroupByOutputType = {
    id: string
    userId: string | null
    name: string
    description: string | null
    muscleGroupId: string | null
    defaultSets: number | null
    defaultRepsLower: number | null
    defaultRepsUpper: number | null
    defaultRir: number | null
    defaultDetails: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: ExerciseTemplateCountAggregateOutputType | null
    _avg: ExerciseTemplateAvgAggregateOutputType | null
    _sum: ExerciseTemplateSumAggregateOutputType | null
    _min: ExerciseTemplateMinAggregateOutputType | null
    _max: ExerciseTemplateMaxAggregateOutputType | null
  }

  type GetExerciseTemplateGroupByPayload<T extends ExerciseTemplateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExerciseTemplateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExerciseTemplateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExerciseTemplateGroupByOutputType[P]>
            : GetScalarType<T[P], ExerciseTemplateGroupByOutputType[P]>
        }
      >
    >


  export type ExerciseTemplateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    muscleGroupId?: boolean
    defaultSets?: boolean
    defaultRepsLower?: boolean
    defaultRepsUpper?: boolean
    defaultRir?: boolean
    defaultDetails?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | ExerciseTemplate$userArgs<ExtArgs>
    muscleGroup?: boolean | ExerciseTemplate$muscleGroupArgs<ExtArgs>
    exercises?: boolean | ExerciseTemplate$exercisesArgs<ExtArgs>
    _count?: boolean | ExerciseTemplateCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exerciseTemplate"]>

  export type ExerciseTemplateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    muscleGroupId?: boolean
    defaultSets?: boolean
    defaultRepsLower?: boolean
    defaultRepsUpper?: boolean
    defaultRir?: boolean
    defaultDetails?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | ExerciseTemplate$userArgs<ExtArgs>
    muscleGroup?: boolean | ExerciseTemplate$muscleGroupArgs<ExtArgs>
  }, ExtArgs["result"]["exerciseTemplate"]>

  export type ExerciseTemplateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    muscleGroupId?: boolean
    defaultSets?: boolean
    defaultRepsLower?: boolean
    defaultRepsUpper?: boolean
    defaultRir?: boolean
    defaultDetails?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | ExerciseTemplate$userArgs<ExtArgs>
    muscleGroup?: boolean | ExerciseTemplate$muscleGroupArgs<ExtArgs>
  }, ExtArgs["result"]["exerciseTemplate"]>

  export type ExerciseTemplateSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    muscleGroupId?: boolean
    defaultSets?: boolean
    defaultRepsLower?: boolean
    defaultRepsUpper?: boolean
    defaultRir?: boolean
    defaultDetails?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ExerciseTemplateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "description" | "muscleGroupId" | "defaultSets" | "defaultRepsLower" | "defaultRepsUpper" | "defaultRir" | "defaultDetails" | "createdAt" | "updatedAt", ExtArgs["result"]["exerciseTemplate"]>
  export type ExerciseTemplateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ExerciseTemplate$userArgs<ExtArgs>
    muscleGroup?: boolean | ExerciseTemplate$muscleGroupArgs<ExtArgs>
    exercises?: boolean | ExerciseTemplate$exercisesArgs<ExtArgs>
    _count?: boolean | ExerciseTemplateCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ExerciseTemplateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ExerciseTemplate$userArgs<ExtArgs>
    muscleGroup?: boolean | ExerciseTemplate$muscleGroupArgs<ExtArgs>
  }
  export type ExerciseTemplateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ExerciseTemplate$userArgs<ExtArgs>
    muscleGroup?: boolean | ExerciseTemplate$muscleGroupArgs<ExtArgs>
  }

  export type $ExerciseTemplatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExerciseTemplate"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      muscleGroup: Prisma.$MuscleGroupPayload<ExtArgs> | null
      exercises: Prisma.$ExercisePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string | null
      name: string
      description: string | null
      muscleGroupId: string | null
      defaultSets: number | null
      defaultRepsLower: number | null
      defaultRepsUpper: number | null
      defaultRir: number | null
      defaultDetails: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["exerciseTemplate"]>
    composites: {}
  }

  type ExerciseTemplateGetPayload<S extends boolean | null | undefined | ExerciseTemplateDefaultArgs> = $Result.GetResult<Prisma.$ExerciseTemplatePayload, S>

  type ExerciseTemplateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExerciseTemplateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExerciseTemplateCountAggregateInputType | true
    }

  export interface ExerciseTemplateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExerciseTemplate'], meta: { name: 'ExerciseTemplate' } }
    /**
     * Find zero or one ExerciseTemplate that matches the filter.
     * @param {ExerciseTemplateFindUniqueArgs} args - Arguments to find a ExerciseTemplate
     * @example
     * // Get one ExerciseTemplate
     * const exerciseTemplate = await prisma.exerciseTemplate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExerciseTemplateFindUniqueArgs>(args: SelectSubset<T, ExerciseTemplateFindUniqueArgs<ExtArgs>>): Prisma__ExerciseTemplateClient<$Result.GetResult<Prisma.$ExerciseTemplatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExerciseTemplate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExerciseTemplateFindUniqueOrThrowArgs} args - Arguments to find a ExerciseTemplate
     * @example
     * // Get one ExerciseTemplate
     * const exerciseTemplate = await prisma.exerciseTemplate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExerciseTemplateFindUniqueOrThrowArgs>(args: SelectSubset<T, ExerciseTemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExerciseTemplateClient<$Result.GetResult<Prisma.$ExerciseTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExerciseTemplate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseTemplateFindFirstArgs} args - Arguments to find a ExerciseTemplate
     * @example
     * // Get one ExerciseTemplate
     * const exerciseTemplate = await prisma.exerciseTemplate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExerciseTemplateFindFirstArgs>(args?: SelectSubset<T, ExerciseTemplateFindFirstArgs<ExtArgs>>): Prisma__ExerciseTemplateClient<$Result.GetResult<Prisma.$ExerciseTemplatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExerciseTemplate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseTemplateFindFirstOrThrowArgs} args - Arguments to find a ExerciseTemplate
     * @example
     * // Get one ExerciseTemplate
     * const exerciseTemplate = await prisma.exerciseTemplate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExerciseTemplateFindFirstOrThrowArgs>(args?: SelectSubset<T, ExerciseTemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExerciseTemplateClient<$Result.GetResult<Prisma.$ExerciseTemplatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExerciseTemplates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseTemplateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExerciseTemplates
     * const exerciseTemplates = await prisma.exerciseTemplate.findMany()
     * 
     * // Get first 10 ExerciseTemplates
     * const exerciseTemplates = await prisma.exerciseTemplate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const exerciseTemplateWithIdOnly = await prisma.exerciseTemplate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExerciseTemplateFindManyArgs>(args?: SelectSubset<T, ExerciseTemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExerciseTemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExerciseTemplate.
     * @param {ExerciseTemplateCreateArgs} args - Arguments to create a ExerciseTemplate.
     * @example
     * // Create one ExerciseTemplate
     * const ExerciseTemplate = await prisma.exerciseTemplate.create({
     *   data: {
     *     // ... data to create a ExerciseTemplate
     *   }
     * })
     * 
     */
    create<T extends ExerciseTemplateCreateArgs>(args: SelectSubset<T, ExerciseTemplateCreateArgs<ExtArgs>>): Prisma__ExerciseTemplateClient<$Result.GetResult<Prisma.$ExerciseTemplatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExerciseTemplates.
     * @param {ExerciseTemplateCreateManyArgs} args - Arguments to create many ExerciseTemplates.
     * @example
     * // Create many ExerciseTemplates
     * const exerciseTemplate = await prisma.exerciseTemplate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExerciseTemplateCreateManyArgs>(args?: SelectSubset<T, ExerciseTemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExerciseTemplates and returns the data saved in the database.
     * @param {ExerciseTemplateCreateManyAndReturnArgs} args - Arguments to create many ExerciseTemplates.
     * @example
     * // Create many ExerciseTemplates
     * const exerciseTemplate = await prisma.exerciseTemplate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExerciseTemplates and only return the `id`
     * const exerciseTemplateWithIdOnly = await prisma.exerciseTemplate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExerciseTemplateCreateManyAndReturnArgs>(args?: SelectSubset<T, ExerciseTemplateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExerciseTemplatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ExerciseTemplate.
     * @param {ExerciseTemplateDeleteArgs} args - Arguments to delete one ExerciseTemplate.
     * @example
     * // Delete one ExerciseTemplate
     * const ExerciseTemplate = await prisma.exerciseTemplate.delete({
     *   where: {
     *     // ... filter to delete one ExerciseTemplate
     *   }
     * })
     * 
     */
    delete<T extends ExerciseTemplateDeleteArgs>(args: SelectSubset<T, ExerciseTemplateDeleteArgs<ExtArgs>>): Prisma__ExerciseTemplateClient<$Result.GetResult<Prisma.$ExerciseTemplatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExerciseTemplate.
     * @param {ExerciseTemplateUpdateArgs} args - Arguments to update one ExerciseTemplate.
     * @example
     * // Update one ExerciseTemplate
     * const exerciseTemplate = await prisma.exerciseTemplate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExerciseTemplateUpdateArgs>(args: SelectSubset<T, ExerciseTemplateUpdateArgs<ExtArgs>>): Prisma__ExerciseTemplateClient<$Result.GetResult<Prisma.$ExerciseTemplatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExerciseTemplates.
     * @param {ExerciseTemplateDeleteManyArgs} args - Arguments to filter ExerciseTemplates to delete.
     * @example
     * // Delete a few ExerciseTemplates
     * const { count } = await prisma.exerciseTemplate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExerciseTemplateDeleteManyArgs>(args?: SelectSubset<T, ExerciseTemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExerciseTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseTemplateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExerciseTemplates
     * const exerciseTemplate = await prisma.exerciseTemplate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExerciseTemplateUpdateManyArgs>(args: SelectSubset<T, ExerciseTemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExerciseTemplates and returns the data updated in the database.
     * @param {ExerciseTemplateUpdateManyAndReturnArgs} args - Arguments to update many ExerciseTemplates.
     * @example
     * // Update many ExerciseTemplates
     * const exerciseTemplate = await prisma.exerciseTemplate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ExerciseTemplates and only return the `id`
     * const exerciseTemplateWithIdOnly = await prisma.exerciseTemplate.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ExerciseTemplateUpdateManyAndReturnArgs>(args: SelectSubset<T, ExerciseTemplateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExerciseTemplatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ExerciseTemplate.
     * @param {ExerciseTemplateUpsertArgs} args - Arguments to update or create a ExerciseTemplate.
     * @example
     * // Update or create a ExerciseTemplate
     * const exerciseTemplate = await prisma.exerciseTemplate.upsert({
     *   create: {
     *     // ... data to create a ExerciseTemplate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExerciseTemplate we want to update
     *   }
     * })
     */
    upsert<T extends ExerciseTemplateUpsertArgs>(args: SelectSubset<T, ExerciseTemplateUpsertArgs<ExtArgs>>): Prisma__ExerciseTemplateClient<$Result.GetResult<Prisma.$ExerciseTemplatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ExerciseTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseTemplateCountArgs} args - Arguments to filter ExerciseTemplates to count.
     * @example
     * // Count the number of ExerciseTemplates
     * const count = await prisma.exerciseTemplate.count({
     *   where: {
     *     // ... the filter for the ExerciseTemplates we want to count
     *   }
     * })
    **/
    count<T extends ExerciseTemplateCountArgs>(
      args?: Subset<T, ExerciseTemplateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExerciseTemplateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExerciseTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseTemplateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExerciseTemplateAggregateArgs>(args: Subset<T, ExerciseTemplateAggregateArgs>): Prisma.PrismaPromise<GetExerciseTemplateAggregateType<T>>

    /**
     * Group by ExerciseTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseTemplateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExerciseTemplateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExerciseTemplateGroupByArgs['orderBy'] }
        : { orderBy?: ExerciseTemplateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExerciseTemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExerciseTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExerciseTemplate model
   */
  readonly fields: ExerciseTemplateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExerciseTemplate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExerciseTemplateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends ExerciseTemplate$userArgs<ExtArgs> = {}>(args?: Subset<T, ExerciseTemplate$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    muscleGroup<T extends ExerciseTemplate$muscleGroupArgs<ExtArgs> = {}>(args?: Subset<T, ExerciseTemplate$muscleGroupArgs<ExtArgs>>): Prisma__MuscleGroupClient<$Result.GetResult<Prisma.$MuscleGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    exercises<T extends ExerciseTemplate$exercisesArgs<ExtArgs> = {}>(args?: Subset<T, ExerciseTemplate$exercisesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ExerciseTemplate model
   */
  interface ExerciseTemplateFieldRefs {
    readonly id: FieldRef<"ExerciseTemplate", 'String'>
    readonly userId: FieldRef<"ExerciseTemplate", 'String'>
    readonly name: FieldRef<"ExerciseTemplate", 'String'>
    readonly description: FieldRef<"ExerciseTemplate", 'String'>
    readonly muscleGroupId: FieldRef<"ExerciseTemplate", 'String'>
    readonly defaultSets: FieldRef<"ExerciseTemplate", 'Int'>
    readonly defaultRepsLower: FieldRef<"ExerciseTemplate", 'Int'>
    readonly defaultRepsUpper: FieldRef<"ExerciseTemplate", 'Int'>
    readonly defaultRir: FieldRef<"ExerciseTemplate", 'Int'>
    readonly defaultDetails: FieldRef<"ExerciseTemplate", 'Json'>
    readonly createdAt: FieldRef<"ExerciseTemplate", 'DateTime'>
    readonly updatedAt: FieldRef<"ExerciseTemplate", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ExerciseTemplate findUnique
   */
  export type ExerciseTemplateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseTemplate
     */
    select?: ExerciseTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseTemplate
     */
    omit?: ExerciseTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseTemplateInclude<ExtArgs> | null
    /**
     * Filter, which ExerciseTemplate to fetch.
     */
    where: ExerciseTemplateWhereUniqueInput
  }

  /**
   * ExerciseTemplate findUniqueOrThrow
   */
  export type ExerciseTemplateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseTemplate
     */
    select?: ExerciseTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseTemplate
     */
    omit?: ExerciseTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseTemplateInclude<ExtArgs> | null
    /**
     * Filter, which ExerciseTemplate to fetch.
     */
    where: ExerciseTemplateWhereUniqueInput
  }

  /**
   * ExerciseTemplate findFirst
   */
  export type ExerciseTemplateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseTemplate
     */
    select?: ExerciseTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseTemplate
     */
    omit?: ExerciseTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseTemplateInclude<ExtArgs> | null
    /**
     * Filter, which ExerciseTemplate to fetch.
     */
    where?: ExerciseTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExerciseTemplates to fetch.
     */
    orderBy?: ExerciseTemplateOrderByWithRelationInput | ExerciseTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExerciseTemplates.
     */
    cursor?: ExerciseTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExerciseTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExerciseTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExerciseTemplates.
     */
    distinct?: ExerciseTemplateScalarFieldEnum | ExerciseTemplateScalarFieldEnum[]
  }

  /**
   * ExerciseTemplate findFirstOrThrow
   */
  export type ExerciseTemplateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseTemplate
     */
    select?: ExerciseTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseTemplate
     */
    omit?: ExerciseTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseTemplateInclude<ExtArgs> | null
    /**
     * Filter, which ExerciseTemplate to fetch.
     */
    where?: ExerciseTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExerciseTemplates to fetch.
     */
    orderBy?: ExerciseTemplateOrderByWithRelationInput | ExerciseTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExerciseTemplates.
     */
    cursor?: ExerciseTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExerciseTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExerciseTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExerciseTemplates.
     */
    distinct?: ExerciseTemplateScalarFieldEnum | ExerciseTemplateScalarFieldEnum[]
  }

  /**
   * ExerciseTemplate findMany
   */
  export type ExerciseTemplateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseTemplate
     */
    select?: ExerciseTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseTemplate
     */
    omit?: ExerciseTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseTemplateInclude<ExtArgs> | null
    /**
     * Filter, which ExerciseTemplates to fetch.
     */
    where?: ExerciseTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExerciseTemplates to fetch.
     */
    orderBy?: ExerciseTemplateOrderByWithRelationInput | ExerciseTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExerciseTemplates.
     */
    cursor?: ExerciseTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExerciseTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExerciseTemplates.
     */
    skip?: number
    distinct?: ExerciseTemplateScalarFieldEnum | ExerciseTemplateScalarFieldEnum[]
  }

  /**
   * ExerciseTemplate create
   */
  export type ExerciseTemplateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseTemplate
     */
    select?: ExerciseTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseTemplate
     */
    omit?: ExerciseTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseTemplateInclude<ExtArgs> | null
    /**
     * The data needed to create a ExerciseTemplate.
     */
    data: XOR<ExerciseTemplateCreateInput, ExerciseTemplateUncheckedCreateInput>
  }

  /**
   * ExerciseTemplate createMany
   */
  export type ExerciseTemplateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExerciseTemplates.
     */
    data: ExerciseTemplateCreateManyInput | ExerciseTemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExerciseTemplate createManyAndReturn
   */
  export type ExerciseTemplateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseTemplate
     */
    select?: ExerciseTemplateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseTemplate
     */
    omit?: ExerciseTemplateOmit<ExtArgs> | null
    /**
     * The data used to create many ExerciseTemplates.
     */
    data: ExerciseTemplateCreateManyInput | ExerciseTemplateCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseTemplateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExerciseTemplate update
   */
  export type ExerciseTemplateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseTemplate
     */
    select?: ExerciseTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseTemplate
     */
    omit?: ExerciseTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseTemplateInclude<ExtArgs> | null
    /**
     * The data needed to update a ExerciseTemplate.
     */
    data: XOR<ExerciseTemplateUpdateInput, ExerciseTemplateUncheckedUpdateInput>
    /**
     * Choose, which ExerciseTemplate to update.
     */
    where: ExerciseTemplateWhereUniqueInput
  }

  /**
   * ExerciseTemplate updateMany
   */
  export type ExerciseTemplateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExerciseTemplates.
     */
    data: XOR<ExerciseTemplateUpdateManyMutationInput, ExerciseTemplateUncheckedUpdateManyInput>
    /**
     * Filter which ExerciseTemplates to update
     */
    where?: ExerciseTemplateWhereInput
    /**
     * Limit how many ExerciseTemplates to update.
     */
    limit?: number
  }

  /**
   * ExerciseTemplate updateManyAndReturn
   */
  export type ExerciseTemplateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseTemplate
     */
    select?: ExerciseTemplateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseTemplate
     */
    omit?: ExerciseTemplateOmit<ExtArgs> | null
    /**
     * The data used to update ExerciseTemplates.
     */
    data: XOR<ExerciseTemplateUpdateManyMutationInput, ExerciseTemplateUncheckedUpdateManyInput>
    /**
     * Filter which ExerciseTemplates to update
     */
    where?: ExerciseTemplateWhereInput
    /**
     * Limit how many ExerciseTemplates to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseTemplateIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExerciseTemplate upsert
   */
  export type ExerciseTemplateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseTemplate
     */
    select?: ExerciseTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseTemplate
     */
    omit?: ExerciseTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseTemplateInclude<ExtArgs> | null
    /**
     * The filter to search for the ExerciseTemplate to update in case it exists.
     */
    where: ExerciseTemplateWhereUniqueInput
    /**
     * In case the ExerciseTemplate found by the `where` argument doesn't exist, create a new ExerciseTemplate with this data.
     */
    create: XOR<ExerciseTemplateCreateInput, ExerciseTemplateUncheckedCreateInput>
    /**
     * In case the ExerciseTemplate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExerciseTemplateUpdateInput, ExerciseTemplateUncheckedUpdateInput>
  }

  /**
   * ExerciseTemplate delete
   */
  export type ExerciseTemplateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseTemplate
     */
    select?: ExerciseTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseTemplate
     */
    omit?: ExerciseTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseTemplateInclude<ExtArgs> | null
    /**
     * Filter which ExerciseTemplate to delete.
     */
    where: ExerciseTemplateWhereUniqueInput
  }

  /**
   * ExerciseTemplate deleteMany
   */
  export type ExerciseTemplateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExerciseTemplates to delete
     */
    where?: ExerciseTemplateWhereInput
    /**
     * Limit how many ExerciseTemplates to delete.
     */
    limit?: number
  }

  /**
   * ExerciseTemplate.user
   */
  export type ExerciseTemplate$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * ExerciseTemplate.muscleGroup
   */
  export type ExerciseTemplate$muscleGroupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MuscleGroup
     */
    select?: MuscleGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MuscleGroup
     */
    omit?: MuscleGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MuscleGroupInclude<ExtArgs> | null
    where?: MuscleGroupWhereInput
  }

  /**
   * ExerciseTemplate.exercises
   */
  export type ExerciseTemplate$exercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    where?: ExerciseWhereInput
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    cursor?: ExerciseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExerciseScalarFieldEnum | ExerciseScalarFieldEnum[]
  }

  /**
   * ExerciseTemplate without action
   */
  export type ExerciseTemplateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseTemplate
     */
    select?: ExerciseTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseTemplate
     */
    omit?: ExerciseTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseTemplateInclude<ExtArgs> | null
  }


  /**
   * Model Exercise
   */

  export type AggregateExercise = {
    _count: ExerciseCountAggregateOutputType | null
    _avg: ExerciseAvgAggregateOutputType | null
    _sum: ExerciseSumAggregateOutputType | null
    _min: ExerciseMinAggregateOutputType | null
    _max: ExerciseMaxAggregateOutputType | null
  }

  export type ExerciseAvgAggregateOutputType = {
    order: number | null
  }

  export type ExerciseSumAggregateOutputType = {
    order: number | null
  }

  export type ExerciseMinAggregateOutputType = {
    id: string | null
    workoutId: string | null
    order: number | null
    exerciseType: $Enums.ExerciseType | null
    exerciseTemplateId: string | null
    muscleGroupId: string | null
    details: string | null
    currentSetId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    completed: boolean | null
  }

  export type ExerciseMaxAggregateOutputType = {
    id: string | null
    workoutId: string | null
    order: number | null
    exerciseType: $Enums.ExerciseType | null
    exerciseTemplateId: string | null
    muscleGroupId: string | null
    details: string | null
    currentSetId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    completed: boolean | null
  }

  export type ExerciseCountAggregateOutputType = {
    id: number
    workoutId: number
    order: number
    exerciseType: number
    exerciseTemplateId: number
    muscleGroupId: number
    details: number
    currentSetId: number
    createdAt: number
    updatedAt: number
    completed: number
    _all: number
  }


  export type ExerciseAvgAggregateInputType = {
    order?: true
  }

  export type ExerciseSumAggregateInputType = {
    order?: true
  }

  export type ExerciseMinAggregateInputType = {
    id?: true
    workoutId?: true
    order?: true
    exerciseType?: true
    exerciseTemplateId?: true
    muscleGroupId?: true
    details?: true
    currentSetId?: true
    createdAt?: true
    updatedAt?: true
    completed?: true
  }

  export type ExerciseMaxAggregateInputType = {
    id?: true
    workoutId?: true
    order?: true
    exerciseType?: true
    exerciseTemplateId?: true
    muscleGroupId?: true
    details?: true
    currentSetId?: true
    createdAt?: true
    updatedAt?: true
    completed?: true
  }

  export type ExerciseCountAggregateInputType = {
    id?: true
    workoutId?: true
    order?: true
    exerciseType?: true
    exerciseTemplateId?: true
    muscleGroupId?: true
    details?: true
    currentSetId?: true
    createdAt?: true
    updatedAt?: true
    completed?: true
    _all?: true
  }

  export type ExerciseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Exercise to aggregate.
     */
    where?: ExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Exercises
    **/
    _count?: true | ExerciseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExerciseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExerciseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExerciseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExerciseMaxAggregateInputType
  }

  export type GetExerciseAggregateType<T extends ExerciseAggregateArgs> = {
        [P in keyof T & keyof AggregateExercise]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExercise[P]>
      : GetScalarType<T[P], AggregateExercise[P]>
  }




  export type ExerciseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExerciseWhereInput
    orderBy?: ExerciseOrderByWithAggregationInput | ExerciseOrderByWithAggregationInput[]
    by: ExerciseScalarFieldEnum[] | ExerciseScalarFieldEnum
    having?: ExerciseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExerciseCountAggregateInputType | true
    _avg?: ExerciseAvgAggregateInputType
    _sum?: ExerciseSumAggregateInputType
    _min?: ExerciseMinAggregateInputType
    _max?: ExerciseMaxAggregateInputType
  }

  export type ExerciseGroupByOutputType = {
    id: string
    workoutId: string
    order: number
    exerciseType: $Enums.ExerciseType
    exerciseTemplateId: string | null
    muscleGroupId: string | null
    details: string | null
    currentSetId: string | null
    createdAt: Date
    updatedAt: Date
    completed: boolean
    _count: ExerciseCountAggregateOutputType | null
    _avg: ExerciseAvgAggregateOutputType | null
    _sum: ExerciseSumAggregateOutputType | null
    _min: ExerciseMinAggregateOutputType | null
    _max: ExerciseMaxAggregateOutputType | null
  }

  type GetExerciseGroupByPayload<T extends ExerciseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExerciseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExerciseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExerciseGroupByOutputType[P]>
            : GetScalarType<T[P], ExerciseGroupByOutputType[P]>
        }
      >
    >


  export type ExerciseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workoutId?: boolean
    order?: boolean
    exerciseType?: boolean
    exerciseTemplateId?: boolean
    muscleGroupId?: boolean
    details?: boolean
    currentSetId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    completed?: boolean
    workout?: boolean | WorkoutDefaultArgs<ExtArgs>
    template?: boolean | Exercise$templateArgs<ExtArgs>
    muscleGroup?: boolean | Exercise$muscleGroupArgs<ExtArgs>
    sets?: boolean | Exercise$setsArgs<ExtArgs>
    currentSet?: boolean | Exercise$currentSetArgs<ExtArgs>
    currentForWorkout?: boolean | Exercise$currentForWorkoutArgs<ExtArgs>
    _count?: boolean | ExerciseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exercise"]>

  export type ExerciseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workoutId?: boolean
    order?: boolean
    exerciseType?: boolean
    exerciseTemplateId?: boolean
    muscleGroupId?: boolean
    details?: boolean
    currentSetId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    completed?: boolean
    workout?: boolean | WorkoutDefaultArgs<ExtArgs>
    template?: boolean | Exercise$templateArgs<ExtArgs>
    muscleGroup?: boolean | Exercise$muscleGroupArgs<ExtArgs>
    currentSet?: boolean | Exercise$currentSetArgs<ExtArgs>
  }, ExtArgs["result"]["exercise"]>

  export type ExerciseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workoutId?: boolean
    order?: boolean
    exerciseType?: boolean
    exerciseTemplateId?: boolean
    muscleGroupId?: boolean
    details?: boolean
    currentSetId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    completed?: boolean
    workout?: boolean | WorkoutDefaultArgs<ExtArgs>
    template?: boolean | Exercise$templateArgs<ExtArgs>
    muscleGroup?: boolean | Exercise$muscleGroupArgs<ExtArgs>
    currentSet?: boolean | Exercise$currentSetArgs<ExtArgs>
  }, ExtArgs["result"]["exercise"]>

  export type ExerciseSelectScalar = {
    id?: boolean
    workoutId?: boolean
    order?: boolean
    exerciseType?: boolean
    exerciseTemplateId?: boolean
    muscleGroupId?: boolean
    details?: boolean
    currentSetId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    completed?: boolean
  }

  export type ExerciseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "workoutId" | "order" | "exerciseType" | "exerciseTemplateId" | "muscleGroupId" | "details" | "currentSetId" | "createdAt" | "updatedAt" | "completed", ExtArgs["result"]["exercise"]>
  export type ExerciseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workout?: boolean | WorkoutDefaultArgs<ExtArgs>
    template?: boolean | Exercise$templateArgs<ExtArgs>
    muscleGroup?: boolean | Exercise$muscleGroupArgs<ExtArgs>
    sets?: boolean | Exercise$setsArgs<ExtArgs>
    currentSet?: boolean | Exercise$currentSetArgs<ExtArgs>
    currentForWorkout?: boolean | Exercise$currentForWorkoutArgs<ExtArgs>
    _count?: boolean | ExerciseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ExerciseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workout?: boolean | WorkoutDefaultArgs<ExtArgs>
    template?: boolean | Exercise$templateArgs<ExtArgs>
    muscleGroup?: boolean | Exercise$muscleGroupArgs<ExtArgs>
    currentSet?: boolean | Exercise$currentSetArgs<ExtArgs>
  }
  export type ExerciseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workout?: boolean | WorkoutDefaultArgs<ExtArgs>
    template?: boolean | Exercise$templateArgs<ExtArgs>
    muscleGroup?: boolean | Exercise$muscleGroupArgs<ExtArgs>
    currentSet?: boolean | Exercise$currentSetArgs<ExtArgs>
  }

  export type $ExercisePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Exercise"
    objects: {
      workout: Prisma.$WorkoutPayload<ExtArgs>
      template: Prisma.$ExerciseTemplatePayload<ExtArgs> | null
      muscleGroup: Prisma.$MuscleGroupPayload<ExtArgs> | null
      sets: Prisma.$SetPayload<ExtArgs>[]
      currentSet: Prisma.$SetPayload<ExtArgs> | null
      currentForWorkout: Prisma.$WorkoutPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workoutId: string
      order: number
      exerciseType: $Enums.ExerciseType
      exerciseTemplateId: string | null
      muscleGroupId: string | null
      details: string | null
      currentSetId: string | null
      createdAt: Date
      updatedAt: Date
      completed: boolean
    }, ExtArgs["result"]["exercise"]>
    composites: {}
  }

  type ExerciseGetPayload<S extends boolean | null | undefined | ExerciseDefaultArgs> = $Result.GetResult<Prisma.$ExercisePayload, S>

  type ExerciseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExerciseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExerciseCountAggregateInputType | true
    }

  export interface ExerciseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Exercise'], meta: { name: 'Exercise' } }
    /**
     * Find zero or one Exercise that matches the filter.
     * @param {ExerciseFindUniqueArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExerciseFindUniqueArgs>(args: SelectSubset<T, ExerciseFindUniqueArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Exercise that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExerciseFindUniqueOrThrowArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExerciseFindUniqueOrThrowArgs>(args: SelectSubset<T, ExerciseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exercise that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseFindFirstArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExerciseFindFirstArgs>(args?: SelectSubset<T, ExerciseFindFirstArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exercise that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseFindFirstOrThrowArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExerciseFindFirstOrThrowArgs>(args?: SelectSubset<T, ExerciseFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Exercises that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Exercises
     * const exercises = await prisma.exercise.findMany()
     * 
     * // Get first 10 Exercises
     * const exercises = await prisma.exercise.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const exerciseWithIdOnly = await prisma.exercise.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExerciseFindManyArgs>(args?: SelectSubset<T, ExerciseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Exercise.
     * @param {ExerciseCreateArgs} args - Arguments to create a Exercise.
     * @example
     * // Create one Exercise
     * const Exercise = await prisma.exercise.create({
     *   data: {
     *     // ... data to create a Exercise
     *   }
     * })
     * 
     */
    create<T extends ExerciseCreateArgs>(args: SelectSubset<T, ExerciseCreateArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Exercises.
     * @param {ExerciseCreateManyArgs} args - Arguments to create many Exercises.
     * @example
     * // Create many Exercises
     * const exercise = await prisma.exercise.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExerciseCreateManyArgs>(args?: SelectSubset<T, ExerciseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Exercises and returns the data saved in the database.
     * @param {ExerciseCreateManyAndReturnArgs} args - Arguments to create many Exercises.
     * @example
     * // Create many Exercises
     * const exercise = await prisma.exercise.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Exercises and only return the `id`
     * const exerciseWithIdOnly = await prisma.exercise.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExerciseCreateManyAndReturnArgs>(args?: SelectSubset<T, ExerciseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Exercise.
     * @param {ExerciseDeleteArgs} args - Arguments to delete one Exercise.
     * @example
     * // Delete one Exercise
     * const Exercise = await prisma.exercise.delete({
     *   where: {
     *     // ... filter to delete one Exercise
     *   }
     * })
     * 
     */
    delete<T extends ExerciseDeleteArgs>(args: SelectSubset<T, ExerciseDeleteArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Exercise.
     * @param {ExerciseUpdateArgs} args - Arguments to update one Exercise.
     * @example
     * // Update one Exercise
     * const exercise = await prisma.exercise.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExerciseUpdateArgs>(args: SelectSubset<T, ExerciseUpdateArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Exercises.
     * @param {ExerciseDeleteManyArgs} args - Arguments to filter Exercises to delete.
     * @example
     * // Delete a few Exercises
     * const { count } = await prisma.exercise.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExerciseDeleteManyArgs>(args?: SelectSubset<T, ExerciseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Exercises
     * const exercise = await prisma.exercise.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExerciseUpdateManyArgs>(args: SelectSubset<T, ExerciseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exercises and returns the data updated in the database.
     * @param {ExerciseUpdateManyAndReturnArgs} args - Arguments to update many Exercises.
     * @example
     * // Update many Exercises
     * const exercise = await prisma.exercise.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Exercises and only return the `id`
     * const exerciseWithIdOnly = await prisma.exercise.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ExerciseUpdateManyAndReturnArgs>(args: SelectSubset<T, ExerciseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Exercise.
     * @param {ExerciseUpsertArgs} args - Arguments to update or create a Exercise.
     * @example
     * // Update or create a Exercise
     * const exercise = await prisma.exercise.upsert({
     *   create: {
     *     // ... data to create a Exercise
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Exercise we want to update
     *   }
     * })
     */
    upsert<T extends ExerciseUpsertArgs>(args: SelectSubset<T, ExerciseUpsertArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Exercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseCountArgs} args - Arguments to filter Exercises to count.
     * @example
     * // Count the number of Exercises
     * const count = await prisma.exercise.count({
     *   where: {
     *     // ... the filter for the Exercises we want to count
     *   }
     * })
    **/
    count<T extends ExerciseCountArgs>(
      args?: Subset<T, ExerciseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExerciseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Exercise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExerciseAggregateArgs>(args: Subset<T, ExerciseAggregateArgs>): Prisma.PrismaPromise<GetExerciseAggregateType<T>>

    /**
     * Group by Exercise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExerciseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExerciseGroupByArgs['orderBy'] }
        : { orderBy?: ExerciseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExerciseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExerciseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Exercise model
   */
  readonly fields: ExerciseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Exercise.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExerciseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workout<T extends WorkoutDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkoutDefaultArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    template<T extends Exercise$templateArgs<ExtArgs> = {}>(args?: Subset<T, Exercise$templateArgs<ExtArgs>>): Prisma__ExerciseTemplateClient<$Result.GetResult<Prisma.$ExerciseTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    muscleGroup<T extends Exercise$muscleGroupArgs<ExtArgs> = {}>(args?: Subset<T, Exercise$muscleGroupArgs<ExtArgs>>): Prisma__MuscleGroupClient<$Result.GetResult<Prisma.$MuscleGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    sets<T extends Exercise$setsArgs<ExtArgs> = {}>(args?: Subset<T, Exercise$setsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    currentSet<T extends Exercise$currentSetArgs<ExtArgs> = {}>(args?: Subset<T, Exercise$currentSetArgs<ExtArgs>>): Prisma__SetClient<$Result.GetResult<Prisma.$SetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    currentForWorkout<T extends Exercise$currentForWorkoutArgs<ExtArgs> = {}>(args?: Subset<T, Exercise$currentForWorkoutArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Exercise model
   */
  interface ExerciseFieldRefs {
    readonly id: FieldRef<"Exercise", 'String'>
    readonly workoutId: FieldRef<"Exercise", 'String'>
    readonly order: FieldRef<"Exercise", 'Int'>
    readonly exerciseType: FieldRef<"Exercise", 'ExerciseType'>
    readonly exerciseTemplateId: FieldRef<"Exercise", 'String'>
    readonly muscleGroupId: FieldRef<"Exercise", 'String'>
    readonly details: FieldRef<"Exercise", 'String'>
    readonly currentSetId: FieldRef<"Exercise", 'String'>
    readonly createdAt: FieldRef<"Exercise", 'DateTime'>
    readonly updatedAt: FieldRef<"Exercise", 'DateTime'>
    readonly completed: FieldRef<"Exercise", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Exercise findUnique
   */
  export type ExerciseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercise to fetch.
     */
    where: ExerciseWhereUniqueInput
  }

  /**
   * Exercise findUniqueOrThrow
   */
  export type ExerciseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercise to fetch.
     */
    where: ExerciseWhereUniqueInput
  }

  /**
   * Exercise findFirst
   */
  export type ExerciseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercise to fetch.
     */
    where?: ExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exercises.
     */
    cursor?: ExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exercises.
     */
    distinct?: ExerciseScalarFieldEnum | ExerciseScalarFieldEnum[]
  }

  /**
   * Exercise findFirstOrThrow
   */
  export type ExerciseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercise to fetch.
     */
    where?: ExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exercises.
     */
    cursor?: ExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exercises.
     */
    distinct?: ExerciseScalarFieldEnum | ExerciseScalarFieldEnum[]
  }

  /**
   * Exercise findMany
   */
  export type ExerciseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercises to fetch.
     */
    where?: ExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Exercises.
     */
    cursor?: ExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    distinct?: ExerciseScalarFieldEnum | ExerciseScalarFieldEnum[]
  }

  /**
   * Exercise create
   */
  export type ExerciseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * The data needed to create a Exercise.
     */
    data: XOR<ExerciseCreateInput, ExerciseUncheckedCreateInput>
  }

  /**
   * Exercise createMany
   */
  export type ExerciseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Exercises.
     */
    data: ExerciseCreateManyInput | ExerciseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Exercise createManyAndReturn
   */
  export type ExerciseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * The data used to create many Exercises.
     */
    data: ExerciseCreateManyInput | ExerciseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Exercise update
   */
  export type ExerciseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * The data needed to update a Exercise.
     */
    data: XOR<ExerciseUpdateInput, ExerciseUncheckedUpdateInput>
    /**
     * Choose, which Exercise to update.
     */
    where: ExerciseWhereUniqueInput
  }

  /**
   * Exercise updateMany
   */
  export type ExerciseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Exercises.
     */
    data: XOR<ExerciseUpdateManyMutationInput, ExerciseUncheckedUpdateManyInput>
    /**
     * Filter which Exercises to update
     */
    where?: ExerciseWhereInput
    /**
     * Limit how many Exercises to update.
     */
    limit?: number
  }

  /**
   * Exercise updateManyAndReturn
   */
  export type ExerciseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * The data used to update Exercises.
     */
    data: XOR<ExerciseUpdateManyMutationInput, ExerciseUncheckedUpdateManyInput>
    /**
     * Filter which Exercises to update
     */
    where?: ExerciseWhereInput
    /**
     * Limit how many Exercises to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Exercise upsert
   */
  export type ExerciseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * The filter to search for the Exercise to update in case it exists.
     */
    where: ExerciseWhereUniqueInput
    /**
     * In case the Exercise found by the `where` argument doesn't exist, create a new Exercise with this data.
     */
    create: XOR<ExerciseCreateInput, ExerciseUncheckedCreateInput>
    /**
     * In case the Exercise was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExerciseUpdateInput, ExerciseUncheckedUpdateInput>
  }

  /**
   * Exercise delete
   */
  export type ExerciseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter which Exercise to delete.
     */
    where: ExerciseWhereUniqueInput
  }

  /**
   * Exercise deleteMany
   */
  export type ExerciseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Exercises to delete
     */
    where?: ExerciseWhereInput
    /**
     * Limit how many Exercises to delete.
     */
    limit?: number
  }

  /**
   * Exercise.template
   */
  export type Exercise$templateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseTemplate
     */
    select?: ExerciseTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseTemplate
     */
    omit?: ExerciseTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseTemplateInclude<ExtArgs> | null
    where?: ExerciseTemplateWhereInput
  }

  /**
   * Exercise.muscleGroup
   */
  export type Exercise$muscleGroupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MuscleGroup
     */
    select?: MuscleGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MuscleGroup
     */
    omit?: MuscleGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MuscleGroupInclude<ExtArgs> | null
    where?: MuscleGroupWhereInput
  }

  /**
   * Exercise.sets
   */
  export type Exercise$setsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Set
     */
    select?: SetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Set
     */
    omit?: SetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetInclude<ExtArgs> | null
    where?: SetWhereInput
    orderBy?: SetOrderByWithRelationInput | SetOrderByWithRelationInput[]
    cursor?: SetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SetScalarFieldEnum | SetScalarFieldEnum[]
  }

  /**
   * Exercise.currentSet
   */
  export type Exercise$currentSetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Set
     */
    select?: SetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Set
     */
    omit?: SetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetInclude<ExtArgs> | null
    where?: SetWhereInput
  }

  /**
   * Exercise.currentForWorkout
   */
  export type Exercise$currentForWorkoutArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    where?: WorkoutWhereInput
  }

  /**
   * Exercise without action
   */
  export type ExerciseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
  }


  /**
   * Model Set
   */

  export type AggregateSet = {
    _count: SetCountAggregateOutputType | null
    _avg: SetAvgAggregateOutputType | null
    _sum: SetSumAggregateOutputType | null
    _min: SetMinAggregateOutputType | null
    _max: SetMaxAggregateOutputType | null
  }

  export type SetAvgAggregateOutputType = {
    setNumber: number | null
    targetReps: number | null
    targetWeightKg: number | null
    minWeightKg: number | null
    maxWeightKg: number | null
    rir: number | null
    rpe: number | null
    targetDurationSec: number | null
    targetDistanceM: number | null
    targetPaceSecPerKm: number | null
    actualReps: number | null
    actualWeightKg: number | null
    actualDurationSec: number | null
    actualDistanceM: number | null
    actualRpe: number | null
  }

  export type SetSumAggregateOutputType = {
    setNumber: number | null
    targetReps: number | null
    targetWeightKg: number | null
    minWeightKg: number | null
    maxWeightKg: number | null
    rir: number | null
    rpe: number | null
    targetDurationSec: number | null
    targetDistanceM: number | null
    targetPaceSecPerKm: number | null
    actualReps: number | null
    actualWeightKg: number | null
    actualDurationSec: number | null
    actualDistanceM: number | null
    actualRpe: number | null
  }

  export type SetMinAggregateOutputType = {
    id: string | null
    exerciseId: string | null
    setNumber: number | null
    type: $Enums.SetType | null
    targetReps: number | null
    targetWeightKg: number | null
    minWeightKg: number | null
    maxWeightKg: number | null
    rir: number | null
    rpe: number | null
    targetDurationSec: number | null
    targetDistanceM: number | null
    targetPaceSecPerKm: number | null
    intensityZone: string | null
    actualReps: number | null
    actualWeightKg: number | null
    actualDurationSec: number | null
    actualDistanceM: number | null
    actualRpe: number | null
    completed: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SetMaxAggregateOutputType = {
    id: string | null
    exerciseId: string | null
    setNumber: number | null
    type: $Enums.SetType | null
    targetReps: number | null
    targetWeightKg: number | null
    minWeightKg: number | null
    maxWeightKg: number | null
    rir: number | null
    rpe: number | null
    targetDurationSec: number | null
    targetDistanceM: number | null
    targetPaceSecPerKm: number | null
    intensityZone: string | null
    actualReps: number | null
    actualWeightKg: number | null
    actualDurationSec: number | null
    actualDistanceM: number | null
    actualRpe: number | null
    completed: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SetCountAggregateOutputType = {
    id: number
    exerciseId: number
    setNumber: number
    type: number
    targetReps: number
    targetWeightKg: number
    minWeightKg: number
    maxWeightKg: number
    rir: number
    rpe: number
    targetDurationSec: number
    targetDistanceM: number
    targetPaceSecPerKm: number
    intensityZone: number
    actualReps: number
    actualWeightKg: number
    actualDurationSec: number
    actualDistanceM: number
    actualRpe: number
    completed: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SetAvgAggregateInputType = {
    setNumber?: true
    targetReps?: true
    targetWeightKg?: true
    minWeightKg?: true
    maxWeightKg?: true
    rir?: true
    rpe?: true
    targetDurationSec?: true
    targetDistanceM?: true
    targetPaceSecPerKm?: true
    actualReps?: true
    actualWeightKg?: true
    actualDurationSec?: true
    actualDistanceM?: true
    actualRpe?: true
  }

  export type SetSumAggregateInputType = {
    setNumber?: true
    targetReps?: true
    targetWeightKg?: true
    minWeightKg?: true
    maxWeightKg?: true
    rir?: true
    rpe?: true
    targetDurationSec?: true
    targetDistanceM?: true
    targetPaceSecPerKm?: true
    actualReps?: true
    actualWeightKg?: true
    actualDurationSec?: true
    actualDistanceM?: true
    actualRpe?: true
  }

  export type SetMinAggregateInputType = {
    id?: true
    exerciseId?: true
    setNumber?: true
    type?: true
    targetReps?: true
    targetWeightKg?: true
    minWeightKg?: true
    maxWeightKg?: true
    rir?: true
    rpe?: true
    targetDurationSec?: true
    targetDistanceM?: true
    targetPaceSecPerKm?: true
    intensityZone?: true
    actualReps?: true
    actualWeightKg?: true
    actualDurationSec?: true
    actualDistanceM?: true
    actualRpe?: true
    completed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SetMaxAggregateInputType = {
    id?: true
    exerciseId?: true
    setNumber?: true
    type?: true
    targetReps?: true
    targetWeightKg?: true
    minWeightKg?: true
    maxWeightKg?: true
    rir?: true
    rpe?: true
    targetDurationSec?: true
    targetDistanceM?: true
    targetPaceSecPerKm?: true
    intensityZone?: true
    actualReps?: true
    actualWeightKg?: true
    actualDurationSec?: true
    actualDistanceM?: true
    actualRpe?: true
    completed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SetCountAggregateInputType = {
    id?: true
    exerciseId?: true
    setNumber?: true
    type?: true
    targetReps?: true
    targetWeightKg?: true
    minWeightKg?: true
    maxWeightKg?: true
    rir?: true
    rpe?: true
    targetDurationSec?: true
    targetDistanceM?: true
    targetPaceSecPerKm?: true
    intensityZone?: true
    actualReps?: true
    actualWeightKg?: true
    actualDurationSec?: true
    actualDistanceM?: true
    actualRpe?: true
    completed?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Set to aggregate.
     */
    where?: SetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sets to fetch.
     */
    orderBy?: SetOrderByWithRelationInput | SetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sets
    **/
    _count?: true | SetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SetMaxAggregateInputType
  }

  export type GetSetAggregateType<T extends SetAggregateArgs> = {
        [P in keyof T & keyof AggregateSet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSet[P]>
      : GetScalarType<T[P], AggregateSet[P]>
  }




  export type SetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SetWhereInput
    orderBy?: SetOrderByWithAggregationInput | SetOrderByWithAggregationInput[]
    by: SetScalarFieldEnum[] | SetScalarFieldEnum
    having?: SetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SetCountAggregateInputType | true
    _avg?: SetAvgAggregateInputType
    _sum?: SetSumAggregateInputType
    _min?: SetMinAggregateInputType
    _max?: SetMaxAggregateInputType
  }

  export type SetGroupByOutputType = {
    id: string
    exerciseId: string
    setNumber: number
    type: $Enums.SetType
    targetReps: number | null
    targetWeightKg: number | null
    minWeightKg: number | null
    maxWeightKg: number | null
    rir: number | null
    rpe: number | null
    targetDurationSec: number | null
    targetDistanceM: number | null
    targetPaceSecPerKm: number | null
    intensityZone: string | null
    actualReps: number | null
    actualWeightKg: number | null
    actualDurationSec: number | null
    actualDistanceM: number | null
    actualRpe: number | null
    completed: boolean
    createdAt: Date
    updatedAt: Date
    _count: SetCountAggregateOutputType | null
    _avg: SetAvgAggregateOutputType | null
    _sum: SetSumAggregateOutputType | null
    _min: SetMinAggregateOutputType | null
    _max: SetMaxAggregateOutputType | null
  }

  type GetSetGroupByPayload<T extends SetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SetGroupByOutputType[P]>
            : GetScalarType<T[P], SetGroupByOutputType[P]>
        }
      >
    >


  export type SetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    exerciseId?: boolean
    setNumber?: boolean
    type?: boolean
    targetReps?: boolean
    targetWeightKg?: boolean
    minWeightKg?: boolean
    maxWeightKg?: boolean
    rir?: boolean
    rpe?: boolean
    targetDurationSec?: boolean
    targetDistanceM?: boolean
    targetPaceSecPerKm?: boolean
    intensityZone?: boolean
    actualReps?: boolean
    actualWeightKg?: boolean
    actualDurationSec?: boolean
    actualDistanceM?: boolean
    actualRpe?: boolean
    completed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
    currentForExercise?: boolean | Set$currentForExerciseArgs<ExtArgs>
  }, ExtArgs["result"]["set"]>

  export type SetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    exerciseId?: boolean
    setNumber?: boolean
    type?: boolean
    targetReps?: boolean
    targetWeightKg?: boolean
    minWeightKg?: boolean
    maxWeightKg?: boolean
    rir?: boolean
    rpe?: boolean
    targetDurationSec?: boolean
    targetDistanceM?: boolean
    targetPaceSecPerKm?: boolean
    intensityZone?: boolean
    actualReps?: boolean
    actualWeightKg?: boolean
    actualDurationSec?: boolean
    actualDistanceM?: boolean
    actualRpe?: boolean
    completed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["set"]>

  export type SetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    exerciseId?: boolean
    setNumber?: boolean
    type?: boolean
    targetReps?: boolean
    targetWeightKg?: boolean
    minWeightKg?: boolean
    maxWeightKg?: boolean
    rir?: boolean
    rpe?: boolean
    targetDurationSec?: boolean
    targetDistanceM?: boolean
    targetPaceSecPerKm?: boolean
    intensityZone?: boolean
    actualReps?: boolean
    actualWeightKg?: boolean
    actualDurationSec?: boolean
    actualDistanceM?: boolean
    actualRpe?: boolean
    completed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["set"]>

  export type SetSelectScalar = {
    id?: boolean
    exerciseId?: boolean
    setNumber?: boolean
    type?: boolean
    targetReps?: boolean
    targetWeightKg?: boolean
    minWeightKg?: boolean
    maxWeightKg?: boolean
    rir?: boolean
    rpe?: boolean
    targetDurationSec?: boolean
    targetDistanceM?: boolean
    targetPaceSecPerKm?: boolean
    intensityZone?: boolean
    actualReps?: boolean
    actualWeightKg?: boolean
    actualDurationSec?: boolean
    actualDistanceM?: boolean
    actualRpe?: boolean
    completed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "exerciseId" | "setNumber" | "type" | "targetReps" | "targetWeightKg" | "minWeightKg" | "maxWeightKg" | "rir" | "rpe" | "targetDurationSec" | "targetDistanceM" | "targetPaceSecPerKm" | "intensityZone" | "actualReps" | "actualWeightKg" | "actualDurationSec" | "actualDistanceM" | "actualRpe" | "completed" | "createdAt" | "updatedAt", ExtArgs["result"]["set"]>
  export type SetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
    currentForExercise?: boolean | Set$currentForExerciseArgs<ExtArgs>
  }
  export type SetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
  }
  export type SetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
  }

  export type $SetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Set"
    objects: {
      exercise: Prisma.$ExercisePayload<ExtArgs>
      currentForExercise: Prisma.$ExercisePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      exerciseId: string
      setNumber: number
      type: $Enums.SetType
      targetReps: number | null
      targetWeightKg: number | null
      minWeightKg: number | null
      maxWeightKg: number | null
      rir: number | null
      rpe: number | null
      targetDurationSec: number | null
      targetDistanceM: number | null
      targetPaceSecPerKm: number | null
      intensityZone: string | null
      actualReps: number | null
      actualWeightKg: number | null
      actualDurationSec: number | null
      actualDistanceM: number | null
      actualRpe: number | null
      completed: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["set"]>
    composites: {}
  }

  type SetGetPayload<S extends boolean | null | undefined | SetDefaultArgs> = $Result.GetResult<Prisma.$SetPayload, S>

  type SetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SetCountAggregateInputType | true
    }

  export interface SetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Set'], meta: { name: 'Set' } }
    /**
     * Find zero or one Set that matches the filter.
     * @param {SetFindUniqueArgs} args - Arguments to find a Set
     * @example
     * // Get one Set
     * const set = await prisma.set.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SetFindUniqueArgs>(args: SelectSubset<T, SetFindUniqueArgs<ExtArgs>>): Prisma__SetClient<$Result.GetResult<Prisma.$SetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Set that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SetFindUniqueOrThrowArgs} args - Arguments to find a Set
     * @example
     * // Get one Set
     * const set = await prisma.set.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SetFindUniqueOrThrowArgs>(args: SelectSubset<T, SetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SetClient<$Result.GetResult<Prisma.$SetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Set that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetFindFirstArgs} args - Arguments to find a Set
     * @example
     * // Get one Set
     * const set = await prisma.set.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SetFindFirstArgs>(args?: SelectSubset<T, SetFindFirstArgs<ExtArgs>>): Prisma__SetClient<$Result.GetResult<Prisma.$SetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Set that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetFindFirstOrThrowArgs} args - Arguments to find a Set
     * @example
     * // Get one Set
     * const set = await prisma.set.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SetFindFirstOrThrowArgs>(args?: SelectSubset<T, SetFindFirstOrThrowArgs<ExtArgs>>): Prisma__SetClient<$Result.GetResult<Prisma.$SetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sets
     * const sets = await prisma.set.findMany()
     * 
     * // Get first 10 Sets
     * const sets = await prisma.set.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const setWithIdOnly = await prisma.set.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SetFindManyArgs>(args?: SelectSubset<T, SetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Set.
     * @param {SetCreateArgs} args - Arguments to create a Set.
     * @example
     * // Create one Set
     * const Set = await prisma.set.create({
     *   data: {
     *     // ... data to create a Set
     *   }
     * })
     * 
     */
    create<T extends SetCreateArgs>(args: SelectSubset<T, SetCreateArgs<ExtArgs>>): Prisma__SetClient<$Result.GetResult<Prisma.$SetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sets.
     * @param {SetCreateManyArgs} args - Arguments to create many Sets.
     * @example
     * // Create many Sets
     * const set = await prisma.set.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SetCreateManyArgs>(args?: SelectSubset<T, SetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sets and returns the data saved in the database.
     * @param {SetCreateManyAndReturnArgs} args - Arguments to create many Sets.
     * @example
     * // Create many Sets
     * const set = await prisma.set.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sets and only return the `id`
     * const setWithIdOnly = await prisma.set.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SetCreateManyAndReturnArgs>(args?: SelectSubset<T, SetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Set.
     * @param {SetDeleteArgs} args - Arguments to delete one Set.
     * @example
     * // Delete one Set
     * const Set = await prisma.set.delete({
     *   where: {
     *     // ... filter to delete one Set
     *   }
     * })
     * 
     */
    delete<T extends SetDeleteArgs>(args: SelectSubset<T, SetDeleteArgs<ExtArgs>>): Prisma__SetClient<$Result.GetResult<Prisma.$SetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Set.
     * @param {SetUpdateArgs} args - Arguments to update one Set.
     * @example
     * // Update one Set
     * const set = await prisma.set.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SetUpdateArgs>(args: SelectSubset<T, SetUpdateArgs<ExtArgs>>): Prisma__SetClient<$Result.GetResult<Prisma.$SetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sets.
     * @param {SetDeleteManyArgs} args - Arguments to filter Sets to delete.
     * @example
     * // Delete a few Sets
     * const { count } = await prisma.set.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SetDeleteManyArgs>(args?: SelectSubset<T, SetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sets
     * const set = await prisma.set.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SetUpdateManyArgs>(args: SelectSubset<T, SetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sets and returns the data updated in the database.
     * @param {SetUpdateManyAndReturnArgs} args - Arguments to update many Sets.
     * @example
     * // Update many Sets
     * const set = await prisma.set.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sets and only return the `id`
     * const setWithIdOnly = await prisma.set.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SetUpdateManyAndReturnArgs>(args: SelectSubset<T, SetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Set.
     * @param {SetUpsertArgs} args - Arguments to update or create a Set.
     * @example
     * // Update or create a Set
     * const set = await prisma.set.upsert({
     *   create: {
     *     // ... data to create a Set
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Set we want to update
     *   }
     * })
     */
    upsert<T extends SetUpsertArgs>(args: SelectSubset<T, SetUpsertArgs<ExtArgs>>): Prisma__SetClient<$Result.GetResult<Prisma.$SetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetCountArgs} args - Arguments to filter Sets to count.
     * @example
     * // Count the number of Sets
     * const count = await prisma.set.count({
     *   where: {
     *     // ... the filter for the Sets we want to count
     *   }
     * })
    **/
    count<T extends SetCountArgs>(
      args?: Subset<T, SetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Set.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SetAggregateArgs>(args: Subset<T, SetAggregateArgs>): Prisma.PrismaPromise<GetSetAggregateType<T>>

    /**
     * Group by Set.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SetGroupByArgs['orderBy'] }
        : { orderBy?: SetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Set model
   */
  readonly fields: SetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Set.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    exercise<T extends ExerciseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExerciseDefaultArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    currentForExercise<T extends Set$currentForExerciseArgs<ExtArgs> = {}>(args?: Subset<T, Set$currentForExerciseArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Set model
   */
  interface SetFieldRefs {
    readonly id: FieldRef<"Set", 'String'>
    readonly exerciseId: FieldRef<"Set", 'String'>
    readonly setNumber: FieldRef<"Set", 'Int'>
    readonly type: FieldRef<"Set", 'SetType'>
    readonly targetReps: FieldRef<"Set", 'Int'>
    readonly targetWeightKg: FieldRef<"Set", 'Float'>
    readonly minWeightKg: FieldRef<"Set", 'Float'>
    readonly maxWeightKg: FieldRef<"Set", 'Float'>
    readonly rir: FieldRef<"Set", 'Int'>
    readonly rpe: FieldRef<"Set", 'Float'>
    readonly targetDurationSec: FieldRef<"Set", 'Int'>
    readonly targetDistanceM: FieldRef<"Set", 'Int'>
    readonly targetPaceSecPerKm: FieldRef<"Set", 'Int'>
    readonly intensityZone: FieldRef<"Set", 'String'>
    readonly actualReps: FieldRef<"Set", 'Int'>
    readonly actualWeightKg: FieldRef<"Set", 'Float'>
    readonly actualDurationSec: FieldRef<"Set", 'Int'>
    readonly actualDistanceM: FieldRef<"Set", 'Int'>
    readonly actualRpe: FieldRef<"Set", 'Float'>
    readonly completed: FieldRef<"Set", 'Boolean'>
    readonly createdAt: FieldRef<"Set", 'DateTime'>
    readonly updatedAt: FieldRef<"Set", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Set findUnique
   */
  export type SetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Set
     */
    select?: SetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Set
     */
    omit?: SetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetInclude<ExtArgs> | null
    /**
     * Filter, which Set to fetch.
     */
    where: SetWhereUniqueInput
  }

  /**
   * Set findUniqueOrThrow
   */
  export type SetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Set
     */
    select?: SetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Set
     */
    omit?: SetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetInclude<ExtArgs> | null
    /**
     * Filter, which Set to fetch.
     */
    where: SetWhereUniqueInput
  }

  /**
   * Set findFirst
   */
  export type SetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Set
     */
    select?: SetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Set
     */
    omit?: SetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetInclude<ExtArgs> | null
    /**
     * Filter, which Set to fetch.
     */
    where?: SetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sets to fetch.
     */
    orderBy?: SetOrderByWithRelationInput | SetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sets.
     */
    cursor?: SetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sets.
     */
    distinct?: SetScalarFieldEnum | SetScalarFieldEnum[]
  }

  /**
   * Set findFirstOrThrow
   */
  export type SetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Set
     */
    select?: SetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Set
     */
    omit?: SetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetInclude<ExtArgs> | null
    /**
     * Filter, which Set to fetch.
     */
    where?: SetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sets to fetch.
     */
    orderBy?: SetOrderByWithRelationInput | SetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sets.
     */
    cursor?: SetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sets.
     */
    distinct?: SetScalarFieldEnum | SetScalarFieldEnum[]
  }

  /**
   * Set findMany
   */
  export type SetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Set
     */
    select?: SetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Set
     */
    omit?: SetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetInclude<ExtArgs> | null
    /**
     * Filter, which Sets to fetch.
     */
    where?: SetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sets to fetch.
     */
    orderBy?: SetOrderByWithRelationInput | SetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sets.
     */
    cursor?: SetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sets.
     */
    skip?: number
    distinct?: SetScalarFieldEnum | SetScalarFieldEnum[]
  }

  /**
   * Set create
   */
  export type SetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Set
     */
    select?: SetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Set
     */
    omit?: SetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetInclude<ExtArgs> | null
    /**
     * The data needed to create a Set.
     */
    data: XOR<SetCreateInput, SetUncheckedCreateInput>
  }

  /**
   * Set createMany
   */
  export type SetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sets.
     */
    data: SetCreateManyInput | SetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Set createManyAndReturn
   */
  export type SetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Set
     */
    select?: SetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Set
     */
    omit?: SetOmit<ExtArgs> | null
    /**
     * The data used to create many Sets.
     */
    data: SetCreateManyInput | SetCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Set update
   */
  export type SetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Set
     */
    select?: SetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Set
     */
    omit?: SetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetInclude<ExtArgs> | null
    /**
     * The data needed to update a Set.
     */
    data: XOR<SetUpdateInput, SetUncheckedUpdateInput>
    /**
     * Choose, which Set to update.
     */
    where: SetWhereUniqueInput
  }

  /**
   * Set updateMany
   */
  export type SetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sets.
     */
    data: XOR<SetUpdateManyMutationInput, SetUncheckedUpdateManyInput>
    /**
     * Filter which Sets to update
     */
    where?: SetWhereInput
    /**
     * Limit how many Sets to update.
     */
    limit?: number
  }

  /**
   * Set updateManyAndReturn
   */
  export type SetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Set
     */
    select?: SetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Set
     */
    omit?: SetOmit<ExtArgs> | null
    /**
     * The data used to update Sets.
     */
    data: XOR<SetUpdateManyMutationInput, SetUncheckedUpdateManyInput>
    /**
     * Filter which Sets to update
     */
    where?: SetWhereInput
    /**
     * Limit how many Sets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Set upsert
   */
  export type SetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Set
     */
    select?: SetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Set
     */
    omit?: SetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetInclude<ExtArgs> | null
    /**
     * The filter to search for the Set to update in case it exists.
     */
    where: SetWhereUniqueInput
    /**
     * In case the Set found by the `where` argument doesn't exist, create a new Set with this data.
     */
    create: XOR<SetCreateInput, SetUncheckedCreateInput>
    /**
     * In case the Set was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SetUpdateInput, SetUncheckedUpdateInput>
  }

  /**
   * Set delete
   */
  export type SetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Set
     */
    select?: SetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Set
     */
    omit?: SetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetInclude<ExtArgs> | null
    /**
     * Filter which Set to delete.
     */
    where: SetWhereUniqueInput
  }

  /**
   * Set deleteMany
   */
  export type SetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sets to delete
     */
    where?: SetWhereInput
    /**
     * Limit how many Sets to delete.
     */
    limit?: number
  }

  /**
   * Set.currentForExercise
   */
  export type Set$currentForExerciseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    where?: ExerciseWhereInput
  }

  /**
   * Set without action
   */
  export type SetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Set
     */
    select?: SetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Set
     */
    omit?: SetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    clerkId: 'clerkId',
    email: 'email',
    phone: 'phone',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const MuscleGroupScalarFieldEnum: {
    id: 'id',
    name: 'name',
    shortName: 'shortName',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MuscleGroupScalarFieldEnum = (typeof MuscleGroupScalarFieldEnum)[keyof typeof MuscleGroupScalarFieldEnum]


  export const ProgramScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    goal: 'goal',
    length: 'length',
    days: 'days',
    currentWeekId: 'currentWeekId',
    completed: 'completed',
    aiPlanJson: 'aiPlanJson',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProgramScalarFieldEnum = (typeof ProgramScalarFieldEnum)[keyof typeof ProgramScalarFieldEnum]


  export const ProgramTemplateScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    goal: 'goal',
    length: 'length',
    days: 'days',
    structureJson: 'structureJson',
    aiPlanJson: 'aiPlanJson',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProgramTemplateScalarFieldEnum = (typeof ProgramTemplateScalarFieldEnum)[keyof typeof ProgramTemplateScalarFieldEnum]


  export const WeekScalarFieldEnum: {
    id: 'id',
    programId: 'programId',
    weekNumber: 'weekNumber',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WeekScalarFieldEnum = (typeof WeekScalarFieldEnum)[keyof typeof WeekScalarFieldEnum]


  export const WorkoutScalarFieldEnum: {
    id: 'id',
    weekId: 'weekId',
    dayNumber: 'dayNumber',
    name: 'name',
    mode: 'mode',
    focusMuscleGroups: 'focusMuscleGroups',
    notes: 'notes',
    currentExerciseId: 'currentExerciseId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    completed: 'completed'
  };

  export type WorkoutScalarFieldEnum = (typeof WorkoutScalarFieldEnum)[keyof typeof WorkoutScalarFieldEnum]


  export const ExerciseTemplateScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    description: 'description',
    muscleGroupId: 'muscleGroupId',
    defaultSets: 'defaultSets',
    defaultRepsLower: 'defaultRepsLower',
    defaultRepsUpper: 'defaultRepsUpper',
    defaultRir: 'defaultRir',
    defaultDetails: 'defaultDetails',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ExerciseTemplateScalarFieldEnum = (typeof ExerciseTemplateScalarFieldEnum)[keyof typeof ExerciseTemplateScalarFieldEnum]


  export const ExerciseScalarFieldEnum: {
    id: 'id',
    workoutId: 'workoutId',
    order: 'order',
    exerciseType: 'exerciseType',
    exerciseTemplateId: 'exerciseTemplateId',
    muscleGroupId: 'muscleGroupId',
    details: 'details',
    currentSetId: 'currentSetId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    completed: 'completed'
  };

  export type ExerciseScalarFieldEnum = (typeof ExerciseScalarFieldEnum)[keyof typeof ExerciseScalarFieldEnum]


  export const SetScalarFieldEnum: {
    id: 'id',
    exerciseId: 'exerciseId',
    setNumber: 'setNumber',
    type: 'type',
    targetReps: 'targetReps',
    targetWeightKg: 'targetWeightKg',
    minWeightKg: 'minWeightKg',
    maxWeightKg: 'maxWeightKg',
    rir: 'rir',
    rpe: 'rpe',
    targetDurationSec: 'targetDurationSec',
    targetDistanceM: 'targetDistanceM',
    targetPaceSecPerKm: 'targetPaceSecPerKm',
    intensityZone: 'intensityZone',
    actualReps: 'actualReps',
    actualWeightKg: 'actualWeightKg',
    actualDurationSec: 'actualDurationSec',
    actualDistanceM: 'actualDistanceM',
    actualRpe: 'actualRpe',
    completed: 'completed',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SetScalarFieldEnum = (typeof SetScalarFieldEnum)[keyof typeof SetScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'ProgramGoal'
   */
  export type EnumProgramGoalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProgramGoal'>
    


  /**
   * Reference to a field of type 'ProgramGoal[]'
   */
  export type ListEnumProgramGoalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProgramGoal[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'WorkoutMode'
   */
  export type EnumWorkoutModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WorkoutMode'>
    


  /**
   * Reference to a field of type 'WorkoutMode[]'
   */
  export type ListEnumWorkoutModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WorkoutMode[]'>
    


  /**
   * Reference to a field of type 'ExerciseType'
   */
  export type EnumExerciseTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExerciseType'>
    


  /**
   * Reference to a field of type 'ExerciseType[]'
   */
  export type ListEnumExerciseTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExerciseType[]'>
    


  /**
   * Reference to a field of type 'SetType'
   */
  export type EnumSetTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SetType'>
    


  /**
   * Reference to a field of type 'SetType[]'
   */
  export type ListEnumSetTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SetType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    clerkId?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    programs?: ProgramListRelationFilter
    exerciseTemplates?: ExerciseTemplateListRelationFilter
    programTemplates?: ProgramTemplateListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    programs?: ProgramOrderByRelationAggregateInput
    exerciseTemplates?: ExerciseTemplateOrderByRelationAggregateInput
    programTemplates?: ProgramTemplateOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    clerkId?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    phone?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    programs?: ProgramListRelationFilter
    exerciseTemplates?: ExerciseTemplateListRelationFilter
    programTemplates?: ProgramTemplateListRelationFilter
  }, "id" | "clerkId" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    clerkId?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type MuscleGroupWhereInput = {
    AND?: MuscleGroupWhereInput | MuscleGroupWhereInput[]
    OR?: MuscleGroupWhereInput[]
    NOT?: MuscleGroupWhereInput | MuscleGroupWhereInput[]
    id?: StringFilter<"MuscleGroup"> | string
    name?: StringFilter<"MuscleGroup"> | string
    shortName?: StringNullableFilter<"MuscleGroup"> | string | null
    description?: StringNullableFilter<"MuscleGroup"> | string | null
    createdAt?: DateTimeFilter<"MuscleGroup"> | Date | string
    updatedAt?: DateTimeFilter<"MuscleGroup"> | Date | string
    exercises?: ExerciseListRelationFilter
    exerciseTemplates?: ExerciseTemplateListRelationFilter
  }

  export type MuscleGroupOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    shortName?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    exercises?: ExerciseOrderByRelationAggregateInput
    exerciseTemplates?: ExerciseTemplateOrderByRelationAggregateInput
  }

  export type MuscleGroupWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: MuscleGroupWhereInput | MuscleGroupWhereInput[]
    OR?: MuscleGroupWhereInput[]
    NOT?: MuscleGroupWhereInput | MuscleGroupWhereInput[]
    shortName?: StringNullableFilter<"MuscleGroup"> | string | null
    description?: StringNullableFilter<"MuscleGroup"> | string | null
    createdAt?: DateTimeFilter<"MuscleGroup"> | Date | string
    updatedAt?: DateTimeFilter<"MuscleGroup"> | Date | string
    exercises?: ExerciseListRelationFilter
    exerciseTemplates?: ExerciseTemplateListRelationFilter
  }, "id" | "name">

  export type MuscleGroupOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    shortName?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MuscleGroupCountOrderByAggregateInput
    _max?: MuscleGroupMaxOrderByAggregateInput
    _min?: MuscleGroupMinOrderByAggregateInput
  }

  export type MuscleGroupScalarWhereWithAggregatesInput = {
    AND?: MuscleGroupScalarWhereWithAggregatesInput | MuscleGroupScalarWhereWithAggregatesInput[]
    OR?: MuscleGroupScalarWhereWithAggregatesInput[]
    NOT?: MuscleGroupScalarWhereWithAggregatesInput | MuscleGroupScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MuscleGroup"> | string
    name?: StringWithAggregatesFilter<"MuscleGroup"> | string
    shortName?: StringNullableWithAggregatesFilter<"MuscleGroup"> | string | null
    description?: StringNullableWithAggregatesFilter<"MuscleGroup"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"MuscleGroup"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MuscleGroup"> | Date | string
  }

  export type ProgramWhereInput = {
    AND?: ProgramWhereInput | ProgramWhereInput[]
    OR?: ProgramWhereInput[]
    NOT?: ProgramWhereInput | ProgramWhereInput[]
    id?: StringFilter<"Program"> | string
    userId?: StringNullableFilter<"Program"> | string | null
    name?: StringFilter<"Program"> | string
    goal?: EnumProgramGoalNullableFilter<"Program"> | $Enums.ProgramGoal | null
    length?: IntFilter<"Program"> | number
    days?: IntFilter<"Program"> | number
    currentWeekId?: StringNullableFilter<"Program"> | string | null
    completed?: BoolFilter<"Program"> | boolean
    aiPlanJson?: JsonNullableFilter<"Program">
    createdAt?: DateTimeFilter<"Program"> | Date | string
    updatedAt?: DateTimeFilter<"Program"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    weeks?: WeekListRelationFilter
    currentWeek?: XOR<WeekNullableScalarRelationFilter, WeekWhereInput> | null
  }

  export type ProgramOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    name?: SortOrder
    goal?: SortOrderInput | SortOrder
    length?: SortOrder
    days?: SortOrder
    currentWeekId?: SortOrderInput | SortOrder
    completed?: SortOrder
    aiPlanJson?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    weeks?: WeekOrderByRelationAggregateInput
    currentWeek?: WeekOrderByWithRelationInput
  }

  export type ProgramWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    currentWeekId?: string
    AND?: ProgramWhereInput | ProgramWhereInput[]
    OR?: ProgramWhereInput[]
    NOT?: ProgramWhereInput | ProgramWhereInput[]
    userId?: StringNullableFilter<"Program"> | string | null
    name?: StringFilter<"Program"> | string
    goal?: EnumProgramGoalNullableFilter<"Program"> | $Enums.ProgramGoal | null
    length?: IntFilter<"Program"> | number
    days?: IntFilter<"Program"> | number
    completed?: BoolFilter<"Program"> | boolean
    aiPlanJson?: JsonNullableFilter<"Program">
    createdAt?: DateTimeFilter<"Program"> | Date | string
    updatedAt?: DateTimeFilter<"Program"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    weeks?: WeekListRelationFilter
    currentWeek?: XOR<WeekNullableScalarRelationFilter, WeekWhereInput> | null
  }, "id" | "currentWeekId">

  export type ProgramOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    name?: SortOrder
    goal?: SortOrderInput | SortOrder
    length?: SortOrder
    days?: SortOrder
    currentWeekId?: SortOrderInput | SortOrder
    completed?: SortOrder
    aiPlanJson?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProgramCountOrderByAggregateInput
    _avg?: ProgramAvgOrderByAggregateInput
    _max?: ProgramMaxOrderByAggregateInput
    _min?: ProgramMinOrderByAggregateInput
    _sum?: ProgramSumOrderByAggregateInput
  }

  export type ProgramScalarWhereWithAggregatesInput = {
    AND?: ProgramScalarWhereWithAggregatesInput | ProgramScalarWhereWithAggregatesInput[]
    OR?: ProgramScalarWhereWithAggregatesInput[]
    NOT?: ProgramScalarWhereWithAggregatesInput | ProgramScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Program"> | string
    userId?: StringNullableWithAggregatesFilter<"Program"> | string | null
    name?: StringWithAggregatesFilter<"Program"> | string
    goal?: EnumProgramGoalNullableWithAggregatesFilter<"Program"> | $Enums.ProgramGoal | null
    length?: IntWithAggregatesFilter<"Program"> | number
    days?: IntWithAggregatesFilter<"Program"> | number
    currentWeekId?: StringNullableWithAggregatesFilter<"Program"> | string | null
    completed?: BoolWithAggregatesFilter<"Program"> | boolean
    aiPlanJson?: JsonNullableWithAggregatesFilter<"Program">
    createdAt?: DateTimeWithAggregatesFilter<"Program"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Program"> | Date | string
  }

  export type ProgramTemplateWhereInput = {
    AND?: ProgramTemplateWhereInput | ProgramTemplateWhereInput[]
    OR?: ProgramTemplateWhereInput[]
    NOT?: ProgramTemplateWhereInput | ProgramTemplateWhereInput[]
    id?: StringFilter<"ProgramTemplate"> | string
    userId?: StringNullableFilter<"ProgramTemplate"> | string | null
    name?: StringFilter<"ProgramTemplate"> | string
    goal?: EnumProgramGoalNullableFilter<"ProgramTemplate"> | $Enums.ProgramGoal | null
    length?: IntFilter<"ProgramTemplate"> | number
    days?: IntFilter<"ProgramTemplate"> | number
    structureJson?: JsonNullableFilter<"ProgramTemplate">
    aiPlanJson?: JsonNullableFilter<"ProgramTemplate">
    createdAt?: DateTimeFilter<"ProgramTemplate"> | Date | string
    updatedAt?: DateTimeFilter<"ProgramTemplate"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type ProgramTemplateOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    name?: SortOrder
    goal?: SortOrderInput | SortOrder
    length?: SortOrder
    days?: SortOrder
    structureJson?: SortOrderInput | SortOrder
    aiPlanJson?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ProgramTemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProgramTemplateWhereInput | ProgramTemplateWhereInput[]
    OR?: ProgramTemplateWhereInput[]
    NOT?: ProgramTemplateWhereInput | ProgramTemplateWhereInput[]
    userId?: StringNullableFilter<"ProgramTemplate"> | string | null
    name?: StringFilter<"ProgramTemplate"> | string
    goal?: EnumProgramGoalNullableFilter<"ProgramTemplate"> | $Enums.ProgramGoal | null
    length?: IntFilter<"ProgramTemplate"> | number
    days?: IntFilter<"ProgramTemplate"> | number
    structureJson?: JsonNullableFilter<"ProgramTemplate">
    aiPlanJson?: JsonNullableFilter<"ProgramTemplate">
    createdAt?: DateTimeFilter<"ProgramTemplate"> | Date | string
    updatedAt?: DateTimeFilter<"ProgramTemplate"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type ProgramTemplateOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    name?: SortOrder
    goal?: SortOrderInput | SortOrder
    length?: SortOrder
    days?: SortOrder
    structureJson?: SortOrderInput | SortOrder
    aiPlanJson?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProgramTemplateCountOrderByAggregateInput
    _avg?: ProgramTemplateAvgOrderByAggregateInput
    _max?: ProgramTemplateMaxOrderByAggregateInput
    _min?: ProgramTemplateMinOrderByAggregateInput
    _sum?: ProgramTemplateSumOrderByAggregateInput
  }

  export type ProgramTemplateScalarWhereWithAggregatesInput = {
    AND?: ProgramTemplateScalarWhereWithAggregatesInput | ProgramTemplateScalarWhereWithAggregatesInput[]
    OR?: ProgramTemplateScalarWhereWithAggregatesInput[]
    NOT?: ProgramTemplateScalarWhereWithAggregatesInput | ProgramTemplateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProgramTemplate"> | string
    userId?: StringNullableWithAggregatesFilter<"ProgramTemplate"> | string | null
    name?: StringWithAggregatesFilter<"ProgramTemplate"> | string
    goal?: EnumProgramGoalNullableWithAggregatesFilter<"ProgramTemplate"> | $Enums.ProgramGoal | null
    length?: IntWithAggregatesFilter<"ProgramTemplate"> | number
    days?: IntWithAggregatesFilter<"ProgramTemplate"> | number
    structureJson?: JsonNullableWithAggregatesFilter<"ProgramTemplate">
    aiPlanJson?: JsonNullableWithAggregatesFilter<"ProgramTemplate">
    createdAt?: DateTimeWithAggregatesFilter<"ProgramTemplate"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProgramTemplate"> | Date | string
  }

  export type WeekWhereInput = {
    AND?: WeekWhereInput | WeekWhereInput[]
    OR?: WeekWhereInput[]
    NOT?: WeekWhereInput | WeekWhereInput[]
    id?: StringFilter<"Week"> | string
    programId?: StringFilter<"Week"> | string
    weekNumber?: IntFilter<"Week"> | number
    createdAt?: DateTimeFilter<"Week"> | Date | string
    updatedAt?: DateTimeFilter<"Week"> | Date | string
    program?: XOR<ProgramScalarRelationFilter, ProgramWhereInput>
    workouts?: WorkoutListRelationFilter
    currentForProgram?: XOR<ProgramNullableScalarRelationFilter, ProgramWhereInput> | null
  }

  export type WeekOrderByWithRelationInput = {
    id?: SortOrder
    programId?: SortOrder
    weekNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    program?: ProgramOrderByWithRelationInput
    workouts?: WorkoutOrderByRelationAggregateInput
    currentForProgram?: ProgramOrderByWithRelationInput
  }

  export type WeekWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    programId_weekNumber?: WeekProgramIdWeekNumberCompoundUniqueInput
    AND?: WeekWhereInput | WeekWhereInput[]
    OR?: WeekWhereInput[]
    NOT?: WeekWhereInput | WeekWhereInput[]
    programId?: StringFilter<"Week"> | string
    weekNumber?: IntFilter<"Week"> | number
    createdAt?: DateTimeFilter<"Week"> | Date | string
    updatedAt?: DateTimeFilter<"Week"> | Date | string
    program?: XOR<ProgramScalarRelationFilter, ProgramWhereInput>
    workouts?: WorkoutListRelationFilter
    currentForProgram?: XOR<ProgramNullableScalarRelationFilter, ProgramWhereInput> | null
  }, "id" | "programId_weekNumber">

  export type WeekOrderByWithAggregationInput = {
    id?: SortOrder
    programId?: SortOrder
    weekNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WeekCountOrderByAggregateInput
    _avg?: WeekAvgOrderByAggregateInput
    _max?: WeekMaxOrderByAggregateInput
    _min?: WeekMinOrderByAggregateInput
    _sum?: WeekSumOrderByAggregateInput
  }

  export type WeekScalarWhereWithAggregatesInput = {
    AND?: WeekScalarWhereWithAggregatesInput | WeekScalarWhereWithAggregatesInput[]
    OR?: WeekScalarWhereWithAggregatesInput[]
    NOT?: WeekScalarWhereWithAggregatesInput | WeekScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Week"> | string
    programId?: StringWithAggregatesFilter<"Week"> | string
    weekNumber?: IntWithAggregatesFilter<"Week"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Week"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Week"> | Date | string
  }

  export type WorkoutWhereInput = {
    AND?: WorkoutWhereInput | WorkoutWhereInput[]
    OR?: WorkoutWhereInput[]
    NOT?: WorkoutWhereInput | WorkoutWhereInput[]
    id?: StringFilter<"Workout"> | string
    weekId?: StringFilter<"Workout"> | string
    dayNumber?: IntFilter<"Workout"> | number
    name?: StringFilter<"Workout"> | string
    mode?: EnumWorkoutModeFilter<"Workout"> | $Enums.WorkoutMode
    focusMuscleGroups?: StringNullableListFilter<"Workout">
    notes?: StringNullableFilter<"Workout"> | string | null
    currentExerciseId?: StringNullableFilter<"Workout"> | string | null
    createdAt?: DateTimeFilter<"Workout"> | Date | string
    updatedAt?: DateTimeFilter<"Workout"> | Date | string
    completed?: BoolFilter<"Workout"> | boolean
    week?: XOR<WeekScalarRelationFilter, WeekWhereInput>
    exercises?: ExerciseListRelationFilter
    currentExercise?: XOR<ExerciseNullableScalarRelationFilter, ExerciseWhereInput> | null
  }

  export type WorkoutOrderByWithRelationInput = {
    id?: SortOrder
    weekId?: SortOrder
    dayNumber?: SortOrder
    name?: SortOrder
    mode?: SortOrder
    focusMuscleGroups?: SortOrder
    notes?: SortOrderInput | SortOrder
    currentExerciseId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    completed?: SortOrder
    week?: WeekOrderByWithRelationInput
    exercises?: ExerciseOrderByRelationAggregateInput
    currentExercise?: ExerciseOrderByWithRelationInput
  }

  export type WorkoutWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    currentExerciseId?: string
    weekId_dayNumber?: WorkoutWeekIdDayNumberCompoundUniqueInput
    AND?: WorkoutWhereInput | WorkoutWhereInput[]
    OR?: WorkoutWhereInput[]
    NOT?: WorkoutWhereInput | WorkoutWhereInput[]
    weekId?: StringFilter<"Workout"> | string
    dayNumber?: IntFilter<"Workout"> | number
    name?: StringFilter<"Workout"> | string
    mode?: EnumWorkoutModeFilter<"Workout"> | $Enums.WorkoutMode
    focusMuscleGroups?: StringNullableListFilter<"Workout">
    notes?: StringNullableFilter<"Workout"> | string | null
    createdAt?: DateTimeFilter<"Workout"> | Date | string
    updatedAt?: DateTimeFilter<"Workout"> | Date | string
    completed?: BoolFilter<"Workout"> | boolean
    week?: XOR<WeekScalarRelationFilter, WeekWhereInput>
    exercises?: ExerciseListRelationFilter
    currentExercise?: XOR<ExerciseNullableScalarRelationFilter, ExerciseWhereInput> | null
  }, "id" | "currentExerciseId" | "weekId_dayNumber">

  export type WorkoutOrderByWithAggregationInput = {
    id?: SortOrder
    weekId?: SortOrder
    dayNumber?: SortOrder
    name?: SortOrder
    mode?: SortOrder
    focusMuscleGroups?: SortOrder
    notes?: SortOrderInput | SortOrder
    currentExerciseId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    completed?: SortOrder
    _count?: WorkoutCountOrderByAggregateInput
    _avg?: WorkoutAvgOrderByAggregateInput
    _max?: WorkoutMaxOrderByAggregateInput
    _min?: WorkoutMinOrderByAggregateInput
    _sum?: WorkoutSumOrderByAggregateInput
  }

  export type WorkoutScalarWhereWithAggregatesInput = {
    AND?: WorkoutScalarWhereWithAggregatesInput | WorkoutScalarWhereWithAggregatesInput[]
    OR?: WorkoutScalarWhereWithAggregatesInput[]
    NOT?: WorkoutScalarWhereWithAggregatesInput | WorkoutScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Workout"> | string
    weekId?: StringWithAggregatesFilter<"Workout"> | string
    dayNumber?: IntWithAggregatesFilter<"Workout"> | number
    name?: StringWithAggregatesFilter<"Workout"> | string
    mode?: EnumWorkoutModeWithAggregatesFilter<"Workout"> | $Enums.WorkoutMode
    focusMuscleGroups?: StringNullableListFilter<"Workout">
    notes?: StringNullableWithAggregatesFilter<"Workout"> | string | null
    currentExerciseId?: StringNullableWithAggregatesFilter<"Workout"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Workout"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Workout"> | Date | string
    completed?: BoolWithAggregatesFilter<"Workout"> | boolean
  }

  export type ExerciseTemplateWhereInput = {
    AND?: ExerciseTemplateWhereInput | ExerciseTemplateWhereInput[]
    OR?: ExerciseTemplateWhereInput[]
    NOT?: ExerciseTemplateWhereInput | ExerciseTemplateWhereInput[]
    id?: StringFilter<"ExerciseTemplate"> | string
    userId?: StringNullableFilter<"ExerciseTemplate"> | string | null
    name?: StringFilter<"ExerciseTemplate"> | string
    description?: StringNullableFilter<"ExerciseTemplate"> | string | null
    muscleGroupId?: StringNullableFilter<"ExerciseTemplate"> | string | null
    defaultSets?: IntNullableFilter<"ExerciseTemplate"> | number | null
    defaultRepsLower?: IntNullableFilter<"ExerciseTemplate"> | number | null
    defaultRepsUpper?: IntNullableFilter<"ExerciseTemplate"> | number | null
    defaultRir?: IntNullableFilter<"ExerciseTemplate"> | number | null
    defaultDetails?: JsonNullableFilter<"ExerciseTemplate">
    createdAt?: DateTimeFilter<"ExerciseTemplate"> | Date | string
    updatedAt?: DateTimeFilter<"ExerciseTemplate"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    muscleGroup?: XOR<MuscleGroupNullableScalarRelationFilter, MuscleGroupWhereInput> | null
    exercises?: ExerciseListRelationFilter
  }

  export type ExerciseTemplateOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    muscleGroupId?: SortOrderInput | SortOrder
    defaultSets?: SortOrderInput | SortOrder
    defaultRepsLower?: SortOrderInput | SortOrder
    defaultRepsUpper?: SortOrderInput | SortOrder
    defaultRir?: SortOrderInput | SortOrder
    defaultDetails?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    muscleGroup?: MuscleGroupOrderByWithRelationInput
    exercises?: ExerciseOrderByRelationAggregateInput
  }

  export type ExerciseTemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExerciseTemplateWhereInput | ExerciseTemplateWhereInput[]
    OR?: ExerciseTemplateWhereInput[]
    NOT?: ExerciseTemplateWhereInput | ExerciseTemplateWhereInput[]
    userId?: StringNullableFilter<"ExerciseTemplate"> | string | null
    name?: StringFilter<"ExerciseTemplate"> | string
    description?: StringNullableFilter<"ExerciseTemplate"> | string | null
    muscleGroupId?: StringNullableFilter<"ExerciseTemplate"> | string | null
    defaultSets?: IntNullableFilter<"ExerciseTemplate"> | number | null
    defaultRepsLower?: IntNullableFilter<"ExerciseTemplate"> | number | null
    defaultRepsUpper?: IntNullableFilter<"ExerciseTemplate"> | number | null
    defaultRir?: IntNullableFilter<"ExerciseTemplate"> | number | null
    defaultDetails?: JsonNullableFilter<"ExerciseTemplate">
    createdAt?: DateTimeFilter<"ExerciseTemplate"> | Date | string
    updatedAt?: DateTimeFilter<"ExerciseTemplate"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    muscleGroup?: XOR<MuscleGroupNullableScalarRelationFilter, MuscleGroupWhereInput> | null
    exercises?: ExerciseListRelationFilter
  }, "id">

  export type ExerciseTemplateOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    muscleGroupId?: SortOrderInput | SortOrder
    defaultSets?: SortOrderInput | SortOrder
    defaultRepsLower?: SortOrderInput | SortOrder
    defaultRepsUpper?: SortOrderInput | SortOrder
    defaultRir?: SortOrderInput | SortOrder
    defaultDetails?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ExerciseTemplateCountOrderByAggregateInput
    _avg?: ExerciseTemplateAvgOrderByAggregateInput
    _max?: ExerciseTemplateMaxOrderByAggregateInput
    _min?: ExerciseTemplateMinOrderByAggregateInput
    _sum?: ExerciseTemplateSumOrderByAggregateInput
  }

  export type ExerciseTemplateScalarWhereWithAggregatesInput = {
    AND?: ExerciseTemplateScalarWhereWithAggregatesInput | ExerciseTemplateScalarWhereWithAggregatesInput[]
    OR?: ExerciseTemplateScalarWhereWithAggregatesInput[]
    NOT?: ExerciseTemplateScalarWhereWithAggregatesInput | ExerciseTemplateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ExerciseTemplate"> | string
    userId?: StringNullableWithAggregatesFilter<"ExerciseTemplate"> | string | null
    name?: StringWithAggregatesFilter<"ExerciseTemplate"> | string
    description?: StringNullableWithAggregatesFilter<"ExerciseTemplate"> | string | null
    muscleGroupId?: StringNullableWithAggregatesFilter<"ExerciseTemplate"> | string | null
    defaultSets?: IntNullableWithAggregatesFilter<"ExerciseTemplate"> | number | null
    defaultRepsLower?: IntNullableWithAggregatesFilter<"ExerciseTemplate"> | number | null
    defaultRepsUpper?: IntNullableWithAggregatesFilter<"ExerciseTemplate"> | number | null
    defaultRir?: IntNullableWithAggregatesFilter<"ExerciseTemplate"> | number | null
    defaultDetails?: JsonNullableWithAggregatesFilter<"ExerciseTemplate">
    createdAt?: DateTimeWithAggregatesFilter<"ExerciseTemplate"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ExerciseTemplate"> | Date | string
  }

  export type ExerciseWhereInput = {
    AND?: ExerciseWhereInput | ExerciseWhereInput[]
    OR?: ExerciseWhereInput[]
    NOT?: ExerciseWhereInput | ExerciseWhereInput[]
    id?: StringFilter<"Exercise"> | string
    workoutId?: StringFilter<"Exercise"> | string
    order?: IntFilter<"Exercise"> | number
    exerciseType?: EnumExerciseTypeFilter<"Exercise"> | $Enums.ExerciseType
    exerciseTemplateId?: StringNullableFilter<"Exercise"> | string | null
    muscleGroupId?: StringNullableFilter<"Exercise"> | string | null
    details?: StringNullableFilter<"Exercise"> | string | null
    currentSetId?: StringNullableFilter<"Exercise"> | string | null
    createdAt?: DateTimeFilter<"Exercise"> | Date | string
    updatedAt?: DateTimeFilter<"Exercise"> | Date | string
    completed?: BoolFilter<"Exercise"> | boolean
    workout?: XOR<WorkoutScalarRelationFilter, WorkoutWhereInput>
    template?: XOR<ExerciseTemplateNullableScalarRelationFilter, ExerciseTemplateWhereInput> | null
    muscleGroup?: XOR<MuscleGroupNullableScalarRelationFilter, MuscleGroupWhereInput> | null
    sets?: SetListRelationFilter
    currentSet?: XOR<SetNullableScalarRelationFilter, SetWhereInput> | null
    currentForWorkout?: XOR<WorkoutNullableScalarRelationFilter, WorkoutWhereInput> | null
  }

  export type ExerciseOrderByWithRelationInput = {
    id?: SortOrder
    workoutId?: SortOrder
    order?: SortOrder
    exerciseType?: SortOrder
    exerciseTemplateId?: SortOrderInput | SortOrder
    muscleGroupId?: SortOrderInput | SortOrder
    details?: SortOrderInput | SortOrder
    currentSetId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    completed?: SortOrder
    workout?: WorkoutOrderByWithRelationInput
    template?: ExerciseTemplateOrderByWithRelationInput
    muscleGroup?: MuscleGroupOrderByWithRelationInput
    sets?: SetOrderByRelationAggregateInput
    currentSet?: SetOrderByWithRelationInput
    currentForWorkout?: WorkoutOrderByWithRelationInput
  }

  export type ExerciseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    currentSetId?: string
    workoutId_order?: ExerciseWorkoutIdOrderCompoundUniqueInput
    AND?: ExerciseWhereInput | ExerciseWhereInput[]
    OR?: ExerciseWhereInput[]
    NOT?: ExerciseWhereInput | ExerciseWhereInput[]
    workoutId?: StringFilter<"Exercise"> | string
    order?: IntFilter<"Exercise"> | number
    exerciseType?: EnumExerciseTypeFilter<"Exercise"> | $Enums.ExerciseType
    exerciseTemplateId?: StringNullableFilter<"Exercise"> | string | null
    muscleGroupId?: StringNullableFilter<"Exercise"> | string | null
    details?: StringNullableFilter<"Exercise"> | string | null
    createdAt?: DateTimeFilter<"Exercise"> | Date | string
    updatedAt?: DateTimeFilter<"Exercise"> | Date | string
    completed?: BoolFilter<"Exercise"> | boolean
    workout?: XOR<WorkoutScalarRelationFilter, WorkoutWhereInput>
    template?: XOR<ExerciseTemplateNullableScalarRelationFilter, ExerciseTemplateWhereInput> | null
    muscleGroup?: XOR<MuscleGroupNullableScalarRelationFilter, MuscleGroupWhereInput> | null
    sets?: SetListRelationFilter
    currentSet?: XOR<SetNullableScalarRelationFilter, SetWhereInput> | null
    currentForWorkout?: XOR<WorkoutNullableScalarRelationFilter, WorkoutWhereInput> | null
  }, "id" | "currentSetId" | "workoutId_order">

  export type ExerciseOrderByWithAggregationInput = {
    id?: SortOrder
    workoutId?: SortOrder
    order?: SortOrder
    exerciseType?: SortOrder
    exerciseTemplateId?: SortOrderInput | SortOrder
    muscleGroupId?: SortOrderInput | SortOrder
    details?: SortOrderInput | SortOrder
    currentSetId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    completed?: SortOrder
    _count?: ExerciseCountOrderByAggregateInput
    _avg?: ExerciseAvgOrderByAggregateInput
    _max?: ExerciseMaxOrderByAggregateInput
    _min?: ExerciseMinOrderByAggregateInput
    _sum?: ExerciseSumOrderByAggregateInput
  }

  export type ExerciseScalarWhereWithAggregatesInput = {
    AND?: ExerciseScalarWhereWithAggregatesInput | ExerciseScalarWhereWithAggregatesInput[]
    OR?: ExerciseScalarWhereWithAggregatesInput[]
    NOT?: ExerciseScalarWhereWithAggregatesInput | ExerciseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Exercise"> | string
    workoutId?: StringWithAggregatesFilter<"Exercise"> | string
    order?: IntWithAggregatesFilter<"Exercise"> | number
    exerciseType?: EnumExerciseTypeWithAggregatesFilter<"Exercise"> | $Enums.ExerciseType
    exerciseTemplateId?: StringNullableWithAggregatesFilter<"Exercise"> | string | null
    muscleGroupId?: StringNullableWithAggregatesFilter<"Exercise"> | string | null
    details?: StringNullableWithAggregatesFilter<"Exercise"> | string | null
    currentSetId?: StringNullableWithAggregatesFilter<"Exercise"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Exercise"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Exercise"> | Date | string
    completed?: BoolWithAggregatesFilter<"Exercise"> | boolean
  }

  export type SetWhereInput = {
    AND?: SetWhereInput | SetWhereInput[]
    OR?: SetWhereInput[]
    NOT?: SetWhereInput | SetWhereInput[]
    id?: StringFilter<"Set"> | string
    exerciseId?: StringFilter<"Set"> | string
    setNumber?: IntFilter<"Set"> | number
    type?: EnumSetTypeFilter<"Set"> | $Enums.SetType
    targetReps?: IntNullableFilter<"Set"> | number | null
    targetWeightKg?: FloatNullableFilter<"Set"> | number | null
    minWeightKg?: FloatNullableFilter<"Set"> | number | null
    maxWeightKg?: FloatNullableFilter<"Set"> | number | null
    rir?: IntNullableFilter<"Set"> | number | null
    rpe?: FloatNullableFilter<"Set"> | number | null
    targetDurationSec?: IntNullableFilter<"Set"> | number | null
    targetDistanceM?: IntNullableFilter<"Set"> | number | null
    targetPaceSecPerKm?: IntNullableFilter<"Set"> | number | null
    intensityZone?: StringNullableFilter<"Set"> | string | null
    actualReps?: IntNullableFilter<"Set"> | number | null
    actualWeightKg?: FloatNullableFilter<"Set"> | number | null
    actualDurationSec?: IntNullableFilter<"Set"> | number | null
    actualDistanceM?: IntNullableFilter<"Set"> | number | null
    actualRpe?: FloatNullableFilter<"Set"> | number | null
    completed?: BoolFilter<"Set"> | boolean
    createdAt?: DateTimeFilter<"Set"> | Date | string
    updatedAt?: DateTimeFilter<"Set"> | Date | string
    exercise?: XOR<ExerciseScalarRelationFilter, ExerciseWhereInput>
    currentForExercise?: XOR<ExerciseNullableScalarRelationFilter, ExerciseWhereInput> | null
  }

  export type SetOrderByWithRelationInput = {
    id?: SortOrder
    exerciseId?: SortOrder
    setNumber?: SortOrder
    type?: SortOrder
    targetReps?: SortOrderInput | SortOrder
    targetWeightKg?: SortOrderInput | SortOrder
    minWeightKg?: SortOrderInput | SortOrder
    maxWeightKg?: SortOrderInput | SortOrder
    rir?: SortOrderInput | SortOrder
    rpe?: SortOrderInput | SortOrder
    targetDurationSec?: SortOrderInput | SortOrder
    targetDistanceM?: SortOrderInput | SortOrder
    targetPaceSecPerKm?: SortOrderInput | SortOrder
    intensityZone?: SortOrderInput | SortOrder
    actualReps?: SortOrderInput | SortOrder
    actualWeightKg?: SortOrderInput | SortOrder
    actualDurationSec?: SortOrderInput | SortOrder
    actualDistanceM?: SortOrderInput | SortOrder
    actualRpe?: SortOrderInput | SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    exercise?: ExerciseOrderByWithRelationInput
    currentForExercise?: ExerciseOrderByWithRelationInput
  }

  export type SetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    exerciseId_setNumber?: SetExerciseIdSetNumberCompoundUniqueInput
    AND?: SetWhereInput | SetWhereInput[]
    OR?: SetWhereInput[]
    NOT?: SetWhereInput | SetWhereInput[]
    exerciseId?: StringFilter<"Set"> | string
    setNumber?: IntFilter<"Set"> | number
    type?: EnumSetTypeFilter<"Set"> | $Enums.SetType
    targetReps?: IntNullableFilter<"Set"> | number | null
    targetWeightKg?: FloatNullableFilter<"Set"> | number | null
    minWeightKg?: FloatNullableFilter<"Set"> | number | null
    maxWeightKg?: FloatNullableFilter<"Set"> | number | null
    rir?: IntNullableFilter<"Set"> | number | null
    rpe?: FloatNullableFilter<"Set"> | number | null
    targetDurationSec?: IntNullableFilter<"Set"> | number | null
    targetDistanceM?: IntNullableFilter<"Set"> | number | null
    targetPaceSecPerKm?: IntNullableFilter<"Set"> | number | null
    intensityZone?: StringNullableFilter<"Set"> | string | null
    actualReps?: IntNullableFilter<"Set"> | number | null
    actualWeightKg?: FloatNullableFilter<"Set"> | number | null
    actualDurationSec?: IntNullableFilter<"Set"> | number | null
    actualDistanceM?: IntNullableFilter<"Set"> | number | null
    actualRpe?: FloatNullableFilter<"Set"> | number | null
    completed?: BoolFilter<"Set"> | boolean
    createdAt?: DateTimeFilter<"Set"> | Date | string
    updatedAt?: DateTimeFilter<"Set"> | Date | string
    exercise?: XOR<ExerciseScalarRelationFilter, ExerciseWhereInput>
    currentForExercise?: XOR<ExerciseNullableScalarRelationFilter, ExerciseWhereInput> | null
  }, "id" | "exerciseId_setNumber">

  export type SetOrderByWithAggregationInput = {
    id?: SortOrder
    exerciseId?: SortOrder
    setNumber?: SortOrder
    type?: SortOrder
    targetReps?: SortOrderInput | SortOrder
    targetWeightKg?: SortOrderInput | SortOrder
    minWeightKg?: SortOrderInput | SortOrder
    maxWeightKg?: SortOrderInput | SortOrder
    rir?: SortOrderInput | SortOrder
    rpe?: SortOrderInput | SortOrder
    targetDurationSec?: SortOrderInput | SortOrder
    targetDistanceM?: SortOrderInput | SortOrder
    targetPaceSecPerKm?: SortOrderInput | SortOrder
    intensityZone?: SortOrderInput | SortOrder
    actualReps?: SortOrderInput | SortOrder
    actualWeightKg?: SortOrderInput | SortOrder
    actualDurationSec?: SortOrderInput | SortOrder
    actualDistanceM?: SortOrderInput | SortOrder
    actualRpe?: SortOrderInput | SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SetCountOrderByAggregateInput
    _avg?: SetAvgOrderByAggregateInput
    _max?: SetMaxOrderByAggregateInput
    _min?: SetMinOrderByAggregateInput
    _sum?: SetSumOrderByAggregateInput
  }

  export type SetScalarWhereWithAggregatesInput = {
    AND?: SetScalarWhereWithAggregatesInput | SetScalarWhereWithAggregatesInput[]
    OR?: SetScalarWhereWithAggregatesInput[]
    NOT?: SetScalarWhereWithAggregatesInput | SetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Set"> | string
    exerciseId?: StringWithAggregatesFilter<"Set"> | string
    setNumber?: IntWithAggregatesFilter<"Set"> | number
    type?: EnumSetTypeWithAggregatesFilter<"Set"> | $Enums.SetType
    targetReps?: IntNullableWithAggregatesFilter<"Set"> | number | null
    targetWeightKg?: FloatNullableWithAggregatesFilter<"Set"> | number | null
    minWeightKg?: FloatNullableWithAggregatesFilter<"Set"> | number | null
    maxWeightKg?: FloatNullableWithAggregatesFilter<"Set"> | number | null
    rir?: IntNullableWithAggregatesFilter<"Set"> | number | null
    rpe?: FloatNullableWithAggregatesFilter<"Set"> | number | null
    targetDurationSec?: IntNullableWithAggregatesFilter<"Set"> | number | null
    targetDistanceM?: IntNullableWithAggregatesFilter<"Set"> | number | null
    targetPaceSecPerKm?: IntNullableWithAggregatesFilter<"Set"> | number | null
    intensityZone?: StringNullableWithAggregatesFilter<"Set"> | string | null
    actualReps?: IntNullableWithAggregatesFilter<"Set"> | number | null
    actualWeightKg?: FloatNullableWithAggregatesFilter<"Set"> | number | null
    actualDurationSec?: IntNullableWithAggregatesFilter<"Set"> | number | null
    actualDistanceM?: IntNullableWithAggregatesFilter<"Set"> | number | null
    actualRpe?: FloatNullableWithAggregatesFilter<"Set"> | number | null
    completed?: BoolWithAggregatesFilter<"Set"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Set"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Set"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    clerkId: string
    email: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    programs?: ProgramCreateNestedManyWithoutUserInput
    exerciseTemplates?: ExerciseTemplateCreateNestedManyWithoutUserInput
    programTemplates?: ProgramTemplateCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    clerkId: string
    email: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    programs?: ProgramUncheckedCreateNestedManyWithoutUserInput
    exerciseTemplates?: ExerciseTemplateUncheckedCreateNestedManyWithoutUserInput
    programTemplates?: ProgramTemplateUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    programs?: ProgramUpdateManyWithoutUserNestedInput
    exerciseTemplates?: ExerciseTemplateUpdateManyWithoutUserNestedInput
    programTemplates?: ProgramTemplateUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    programs?: ProgramUncheckedUpdateManyWithoutUserNestedInput
    exerciseTemplates?: ExerciseTemplateUncheckedUpdateManyWithoutUserNestedInput
    programTemplates?: ProgramTemplateUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    clerkId: string
    email: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MuscleGroupCreateInput = {
    id?: string
    name: string
    shortName?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    exercises?: ExerciseCreateNestedManyWithoutMuscleGroupInput
    exerciseTemplates?: ExerciseTemplateCreateNestedManyWithoutMuscleGroupInput
  }

  export type MuscleGroupUncheckedCreateInput = {
    id?: string
    name: string
    shortName?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    exercises?: ExerciseUncheckedCreateNestedManyWithoutMuscleGroupInput
    exerciseTemplates?: ExerciseTemplateUncheckedCreateNestedManyWithoutMuscleGroupInput
  }

  export type MuscleGroupUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    shortName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exercises?: ExerciseUpdateManyWithoutMuscleGroupNestedInput
    exerciseTemplates?: ExerciseTemplateUpdateManyWithoutMuscleGroupNestedInput
  }

  export type MuscleGroupUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    shortName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exercises?: ExerciseUncheckedUpdateManyWithoutMuscleGroupNestedInput
    exerciseTemplates?: ExerciseTemplateUncheckedUpdateManyWithoutMuscleGroupNestedInput
  }

  export type MuscleGroupCreateManyInput = {
    id?: string
    name: string
    shortName?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MuscleGroupUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    shortName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MuscleGroupUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    shortName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgramCreateInput = {
    id?: string
    name: string
    goal?: $Enums.ProgramGoal | null
    length: number
    days: number
    completed?: boolean
    aiPlanJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutProgramsInput
    weeks?: WeekCreateNestedManyWithoutProgramInput
    currentWeek?: WeekCreateNestedOneWithoutCurrentForProgramInput
  }

  export type ProgramUncheckedCreateInput = {
    id?: string
    userId?: string | null
    name: string
    goal?: $Enums.ProgramGoal | null
    length: number
    days: number
    currentWeekId?: string | null
    completed?: boolean
    aiPlanJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    weeks?: WeekUncheckedCreateNestedManyWithoutProgramInput
  }

  export type ProgramUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    goal?: NullableEnumProgramGoalFieldUpdateOperationsInput | $Enums.ProgramGoal | null
    length?: IntFieldUpdateOperationsInput | number
    days?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    aiPlanJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutProgramsNestedInput
    weeks?: WeekUpdateManyWithoutProgramNestedInput
    currentWeek?: WeekUpdateOneWithoutCurrentForProgramNestedInput
  }

  export type ProgramUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    goal?: NullableEnumProgramGoalFieldUpdateOperationsInput | $Enums.ProgramGoal | null
    length?: IntFieldUpdateOperationsInput | number
    days?: IntFieldUpdateOperationsInput | number
    currentWeekId?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    aiPlanJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weeks?: WeekUncheckedUpdateManyWithoutProgramNestedInput
  }

  export type ProgramCreateManyInput = {
    id?: string
    userId?: string | null
    name: string
    goal?: $Enums.ProgramGoal | null
    length: number
    days: number
    currentWeekId?: string | null
    completed?: boolean
    aiPlanJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProgramUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    goal?: NullableEnumProgramGoalFieldUpdateOperationsInput | $Enums.ProgramGoal | null
    length?: IntFieldUpdateOperationsInput | number
    days?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    aiPlanJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgramUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    goal?: NullableEnumProgramGoalFieldUpdateOperationsInput | $Enums.ProgramGoal | null
    length?: IntFieldUpdateOperationsInput | number
    days?: IntFieldUpdateOperationsInput | number
    currentWeekId?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    aiPlanJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgramTemplateCreateInput = {
    id?: string
    name: string
    goal?: $Enums.ProgramGoal | null
    length: number
    days: number
    structureJson?: NullableJsonNullValueInput | InputJsonValue
    aiPlanJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutProgramTemplatesInput
  }

  export type ProgramTemplateUncheckedCreateInput = {
    id?: string
    userId?: string | null
    name: string
    goal?: $Enums.ProgramGoal | null
    length: number
    days: number
    structureJson?: NullableJsonNullValueInput | InputJsonValue
    aiPlanJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProgramTemplateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    goal?: NullableEnumProgramGoalFieldUpdateOperationsInput | $Enums.ProgramGoal | null
    length?: IntFieldUpdateOperationsInput | number
    days?: IntFieldUpdateOperationsInput | number
    structureJson?: NullableJsonNullValueInput | InputJsonValue
    aiPlanJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutProgramTemplatesNestedInput
  }

  export type ProgramTemplateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    goal?: NullableEnumProgramGoalFieldUpdateOperationsInput | $Enums.ProgramGoal | null
    length?: IntFieldUpdateOperationsInput | number
    days?: IntFieldUpdateOperationsInput | number
    structureJson?: NullableJsonNullValueInput | InputJsonValue
    aiPlanJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgramTemplateCreateManyInput = {
    id?: string
    userId?: string | null
    name: string
    goal?: $Enums.ProgramGoal | null
    length: number
    days: number
    structureJson?: NullableJsonNullValueInput | InputJsonValue
    aiPlanJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProgramTemplateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    goal?: NullableEnumProgramGoalFieldUpdateOperationsInput | $Enums.ProgramGoal | null
    length?: IntFieldUpdateOperationsInput | number
    days?: IntFieldUpdateOperationsInput | number
    structureJson?: NullableJsonNullValueInput | InputJsonValue
    aiPlanJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgramTemplateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    goal?: NullableEnumProgramGoalFieldUpdateOperationsInput | $Enums.ProgramGoal | null
    length?: IntFieldUpdateOperationsInput | number
    days?: IntFieldUpdateOperationsInput | number
    structureJson?: NullableJsonNullValueInput | InputJsonValue
    aiPlanJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeekCreateInput = {
    id?: string
    weekNumber: number
    createdAt?: Date | string
    updatedAt?: Date | string
    program: ProgramCreateNestedOneWithoutWeeksInput
    workouts?: WorkoutCreateNestedManyWithoutWeekInput
    currentForProgram?: ProgramCreateNestedOneWithoutCurrentWeekInput
  }

  export type WeekUncheckedCreateInput = {
    id?: string
    programId: string
    weekNumber: number
    createdAt?: Date | string
    updatedAt?: Date | string
    workouts?: WorkoutUncheckedCreateNestedManyWithoutWeekInput
    currentForProgram?: ProgramUncheckedCreateNestedOneWithoutCurrentWeekInput
  }

  export type WeekUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    weekNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    program?: ProgramUpdateOneRequiredWithoutWeeksNestedInput
    workouts?: WorkoutUpdateManyWithoutWeekNestedInput
    currentForProgram?: ProgramUpdateOneWithoutCurrentWeekNestedInput
  }

  export type WeekUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    programId?: StringFieldUpdateOperationsInput | string
    weekNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workouts?: WorkoutUncheckedUpdateManyWithoutWeekNestedInput
    currentForProgram?: ProgramUncheckedUpdateOneWithoutCurrentWeekNestedInput
  }

  export type WeekCreateManyInput = {
    id?: string
    programId: string
    weekNumber: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WeekUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    weekNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeekUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    programId?: StringFieldUpdateOperationsInput | string
    weekNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkoutCreateInput = {
    id?: string
    dayNumber: number
    name: string
    mode?: $Enums.WorkoutMode
    focusMuscleGroups?: WorkoutCreatefocusMuscleGroupsInput | string[]
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    completed?: boolean
    week: WeekCreateNestedOneWithoutWorkoutsInput
    exercises?: ExerciseCreateNestedManyWithoutWorkoutInput
    currentExercise?: ExerciseCreateNestedOneWithoutCurrentForWorkoutInput
  }

  export type WorkoutUncheckedCreateInput = {
    id?: string
    weekId: string
    dayNumber: number
    name: string
    mode?: $Enums.WorkoutMode
    focusMuscleGroups?: WorkoutCreatefocusMuscleGroupsInput | string[]
    notes?: string | null
    currentExerciseId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    completed?: boolean
    exercises?: ExerciseUncheckedCreateNestedManyWithoutWorkoutInput
  }

  export type WorkoutUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayNumber?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    mode?: EnumWorkoutModeFieldUpdateOperationsInput | $Enums.WorkoutMode
    focusMuscleGroups?: WorkoutUpdatefocusMuscleGroupsInput | string[]
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    week?: WeekUpdateOneRequiredWithoutWorkoutsNestedInput
    exercises?: ExerciseUpdateManyWithoutWorkoutNestedInput
    currentExercise?: ExerciseUpdateOneWithoutCurrentForWorkoutNestedInput
  }

  export type WorkoutUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    weekId?: StringFieldUpdateOperationsInput | string
    dayNumber?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    mode?: EnumWorkoutModeFieldUpdateOperationsInput | $Enums.WorkoutMode
    focusMuscleGroups?: WorkoutUpdatefocusMuscleGroupsInput | string[]
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    currentExerciseId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    exercises?: ExerciseUncheckedUpdateManyWithoutWorkoutNestedInput
  }

  export type WorkoutCreateManyInput = {
    id?: string
    weekId: string
    dayNumber: number
    name: string
    mode?: $Enums.WorkoutMode
    focusMuscleGroups?: WorkoutCreatefocusMuscleGroupsInput | string[]
    notes?: string | null
    currentExerciseId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    completed?: boolean
  }

  export type WorkoutUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayNumber?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    mode?: EnumWorkoutModeFieldUpdateOperationsInput | $Enums.WorkoutMode
    focusMuscleGroups?: WorkoutUpdatefocusMuscleGroupsInput | string[]
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type WorkoutUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    weekId?: StringFieldUpdateOperationsInput | string
    dayNumber?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    mode?: EnumWorkoutModeFieldUpdateOperationsInput | $Enums.WorkoutMode
    focusMuscleGroups?: WorkoutUpdatefocusMuscleGroupsInput | string[]
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    currentExerciseId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ExerciseTemplateCreateInput = {
    id?: string
    name: string
    description?: string | null
    defaultSets?: number | null
    defaultRepsLower?: number | null
    defaultRepsUpper?: number | null
    defaultRir?: number | null
    defaultDetails?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutExerciseTemplatesInput
    muscleGroup?: MuscleGroupCreateNestedOneWithoutExerciseTemplatesInput
    exercises?: ExerciseCreateNestedManyWithoutTemplateInput
  }

  export type ExerciseTemplateUncheckedCreateInput = {
    id?: string
    userId?: string | null
    name: string
    description?: string | null
    muscleGroupId?: string | null
    defaultSets?: number | null
    defaultRepsLower?: number | null
    defaultRepsUpper?: number | null
    defaultRir?: number | null
    defaultDetails?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    exercises?: ExerciseUncheckedCreateNestedManyWithoutTemplateInput
  }

  export type ExerciseTemplateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    defaultSets?: NullableIntFieldUpdateOperationsInput | number | null
    defaultRepsLower?: NullableIntFieldUpdateOperationsInput | number | null
    defaultRepsUpper?: NullableIntFieldUpdateOperationsInput | number | null
    defaultRir?: NullableIntFieldUpdateOperationsInput | number | null
    defaultDetails?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutExerciseTemplatesNestedInput
    muscleGroup?: MuscleGroupUpdateOneWithoutExerciseTemplatesNestedInput
    exercises?: ExerciseUpdateManyWithoutTemplateNestedInput
  }

  export type ExerciseTemplateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    muscleGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    defaultSets?: NullableIntFieldUpdateOperationsInput | number | null
    defaultRepsLower?: NullableIntFieldUpdateOperationsInput | number | null
    defaultRepsUpper?: NullableIntFieldUpdateOperationsInput | number | null
    defaultRir?: NullableIntFieldUpdateOperationsInput | number | null
    defaultDetails?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exercises?: ExerciseUncheckedUpdateManyWithoutTemplateNestedInput
  }

  export type ExerciseTemplateCreateManyInput = {
    id?: string
    userId?: string | null
    name: string
    description?: string | null
    muscleGroupId?: string | null
    defaultSets?: number | null
    defaultRepsLower?: number | null
    defaultRepsUpper?: number | null
    defaultRir?: number | null
    defaultDetails?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExerciseTemplateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    defaultSets?: NullableIntFieldUpdateOperationsInput | number | null
    defaultRepsLower?: NullableIntFieldUpdateOperationsInput | number | null
    defaultRepsUpper?: NullableIntFieldUpdateOperationsInput | number | null
    defaultRir?: NullableIntFieldUpdateOperationsInput | number | null
    defaultDetails?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExerciseTemplateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    muscleGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    defaultSets?: NullableIntFieldUpdateOperationsInput | number | null
    defaultRepsLower?: NullableIntFieldUpdateOperationsInput | number | null
    defaultRepsUpper?: NullableIntFieldUpdateOperationsInput | number | null
    defaultRir?: NullableIntFieldUpdateOperationsInput | number | null
    defaultDetails?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExerciseCreateInput = {
    id?: string
    order: number
    exerciseType?: $Enums.ExerciseType
    details?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    completed?: boolean
    workout: WorkoutCreateNestedOneWithoutExercisesInput
    template?: ExerciseTemplateCreateNestedOneWithoutExercisesInput
    muscleGroup?: MuscleGroupCreateNestedOneWithoutExercisesInput
    sets?: SetCreateNestedManyWithoutExerciseInput
    currentSet?: SetCreateNestedOneWithoutCurrentForExerciseInput
    currentForWorkout?: WorkoutCreateNestedOneWithoutCurrentExerciseInput
  }

  export type ExerciseUncheckedCreateInput = {
    id?: string
    workoutId: string
    order: number
    exerciseType?: $Enums.ExerciseType
    exerciseTemplateId?: string | null
    muscleGroupId?: string | null
    details?: string | null
    currentSetId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    completed?: boolean
    sets?: SetUncheckedCreateNestedManyWithoutExerciseInput
    currentForWorkout?: WorkoutUncheckedCreateNestedOneWithoutCurrentExerciseInput
  }

  export type ExerciseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    exerciseType?: EnumExerciseTypeFieldUpdateOperationsInput | $Enums.ExerciseType
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    workout?: WorkoutUpdateOneRequiredWithoutExercisesNestedInput
    template?: ExerciseTemplateUpdateOneWithoutExercisesNestedInput
    muscleGroup?: MuscleGroupUpdateOneWithoutExercisesNestedInput
    sets?: SetUpdateManyWithoutExerciseNestedInput
    currentSet?: SetUpdateOneWithoutCurrentForExerciseNestedInput
    currentForWorkout?: WorkoutUpdateOneWithoutCurrentExerciseNestedInput
  }

  export type ExerciseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workoutId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    exerciseType?: EnumExerciseTypeFieldUpdateOperationsInput | $Enums.ExerciseType
    exerciseTemplateId?: NullableStringFieldUpdateOperationsInput | string | null
    muscleGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    currentSetId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    sets?: SetUncheckedUpdateManyWithoutExerciseNestedInput
    currentForWorkout?: WorkoutUncheckedUpdateOneWithoutCurrentExerciseNestedInput
  }

  export type ExerciseCreateManyInput = {
    id?: string
    workoutId: string
    order: number
    exerciseType?: $Enums.ExerciseType
    exerciseTemplateId?: string | null
    muscleGroupId?: string | null
    details?: string | null
    currentSetId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    completed?: boolean
  }

  export type ExerciseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    exerciseType?: EnumExerciseTypeFieldUpdateOperationsInput | $Enums.ExerciseType
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ExerciseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workoutId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    exerciseType?: EnumExerciseTypeFieldUpdateOperationsInput | $Enums.ExerciseType
    exerciseTemplateId?: NullableStringFieldUpdateOperationsInput | string | null
    muscleGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    currentSetId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SetCreateInput = {
    id?: string
    setNumber: number
    type?: $Enums.SetType
    targetReps?: number | null
    targetWeightKg?: number | null
    minWeightKg?: number | null
    maxWeightKg?: number | null
    rir?: number | null
    rpe?: number | null
    targetDurationSec?: number | null
    targetDistanceM?: number | null
    targetPaceSecPerKm?: number | null
    intensityZone?: string | null
    actualReps?: number | null
    actualWeightKg?: number | null
    actualDurationSec?: number | null
    actualDistanceM?: number | null
    actualRpe?: number | null
    completed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    exercise: ExerciseCreateNestedOneWithoutSetsInput
    currentForExercise?: ExerciseCreateNestedOneWithoutCurrentSetInput
  }

  export type SetUncheckedCreateInput = {
    id?: string
    exerciseId: string
    setNumber: number
    type?: $Enums.SetType
    targetReps?: number | null
    targetWeightKg?: number | null
    minWeightKg?: number | null
    maxWeightKg?: number | null
    rir?: number | null
    rpe?: number | null
    targetDurationSec?: number | null
    targetDistanceM?: number | null
    targetPaceSecPerKm?: number | null
    intensityZone?: string | null
    actualReps?: number | null
    actualWeightKg?: number | null
    actualDurationSec?: number | null
    actualDistanceM?: number | null
    actualRpe?: number | null
    completed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    currentForExercise?: ExerciseUncheckedCreateNestedOneWithoutCurrentSetInput
  }

  export type SetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    setNumber?: IntFieldUpdateOperationsInput | number
    type?: EnumSetTypeFieldUpdateOperationsInput | $Enums.SetType
    targetReps?: NullableIntFieldUpdateOperationsInput | number | null
    targetWeightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    minWeightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    maxWeightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    rir?: NullableIntFieldUpdateOperationsInput | number | null
    rpe?: NullableFloatFieldUpdateOperationsInput | number | null
    targetDurationSec?: NullableIntFieldUpdateOperationsInput | number | null
    targetDistanceM?: NullableIntFieldUpdateOperationsInput | number | null
    targetPaceSecPerKm?: NullableIntFieldUpdateOperationsInput | number | null
    intensityZone?: NullableStringFieldUpdateOperationsInput | string | null
    actualReps?: NullableIntFieldUpdateOperationsInput | number | null
    actualWeightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    actualDurationSec?: NullableIntFieldUpdateOperationsInput | number | null
    actualDistanceM?: NullableIntFieldUpdateOperationsInput | number | null
    actualRpe?: NullableFloatFieldUpdateOperationsInput | number | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exercise?: ExerciseUpdateOneRequiredWithoutSetsNestedInput
    currentForExercise?: ExerciseUpdateOneWithoutCurrentSetNestedInput
  }

  export type SetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    exerciseId?: StringFieldUpdateOperationsInput | string
    setNumber?: IntFieldUpdateOperationsInput | number
    type?: EnumSetTypeFieldUpdateOperationsInput | $Enums.SetType
    targetReps?: NullableIntFieldUpdateOperationsInput | number | null
    targetWeightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    minWeightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    maxWeightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    rir?: NullableIntFieldUpdateOperationsInput | number | null
    rpe?: NullableFloatFieldUpdateOperationsInput | number | null
    targetDurationSec?: NullableIntFieldUpdateOperationsInput | number | null
    targetDistanceM?: NullableIntFieldUpdateOperationsInput | number | null
    targetPaceSecPerKm?: NullableIntFieldUpdateOperationsInput | number | null
    intensityZone?: NullableStringFieldUpdateOperationsInput | string | null
    actualReps?: NullableIntFieldUpdateOperationsInput | number | null
    actualWeightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    actualDurationSec?: NullableIntFieldUpdateOperationsInput | number | null
    actualDistanceM?: NullableIntFieldUpdateOperationsInput | number | null
    actualRpe?: NullableFloatFieldUpdateOperationsInput | number | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currentForExercise?: ExerciseUncheckedUpdateOneWithoutCurrentSetNestedInput
  }

  export type SetCreateManyInput = {
    id?: string
    exerciseId: string
    setNumber: number
    type?: $Enums.SetType
    targetReps?: number | null
    targetWeightKg?: number | null
    minWeightKg?: number | null
    maxWeightKg?: number | null
    rir?: number | null
    rpe?: number | null
    targetDurationSec?: number | null
    targetDistanceM?: number | null
    targetPaceSecPerKm?: number | null
    intensityZone?: string | null
    actualReps?: number | null
    actualWeightKg?: number | null
    actualDurationSec?: number | null
    actualDistanceM?: number | null
    actualRpe?: number | null
    completed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    setNumber?: IntFieldUpdateOperationsInput | number
    type?: EnumSetTypeFieldUpdateOperationsInput | $Enums.SetType
    targetReps?: NullableIntFieldUpdateOperationsInput | number | null
    targetWeightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    minWeightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    maxWeightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    rir?: NullableIntFieldUpdateOperationsInput | number | null
    rpe?: NullableFloatFieldUpdateOperationsInput | number | null
    targetDurationSec?: NullableIntFieldUpdateOperationsInput | number | null
    targetDistanceM?: NullableIntFieldUpdateOperationsInput | number | null
    targetPaceSecPerKm?: NullableIntFieldUpdateOperationsInput | number | null
    intensityZone?: NullableStringFieldUpdateOperationsInput | string | null
    actualReps?: NullableIntFieldUpdateOperationsInput | number | null
    actualWeightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    actualDurationSec?: NullableIntFieldUpdateOperationsInput | number | null
    actualDistanceM?: NullableIntFieldUpdateOperationsInput | number | null
    actualRpe?: NullableFloatFieldUpdateOperationsInput | number | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    exerciseId?: StringFieldUpdateOperationsInput | string
    setNumber?: IntFieldUpdateOperationsInput | number
    type?: EnumSetTypeFieldUpdateOperationsInput | $Enums.SetType
    targetReps?: NullableIntFieldUpdateOperationsInput | number | null
    targetWeightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    minWeightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    maxWeightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    rir?: NullableIntFieldUpdateOperationsInput | number | null
    rpe?: NullableFloatFieldUpdateOperationsInput | number | null
    targetDurationSec?: NullableIntFieldUpdateOperationsInput | number | null
    targetDistanceM?: NullableIntFieldUpdateOperationsInput | number | null
    targetPaceSecPerKm?: NullableIntFieldUpdateOperationsInput | number | null
    intensityZone?: NullableStringFieldUpdateOperationsInput | string | null
    actualReps?: NullableIntFieldUpdateOperationsInput | number | null
    actualWeightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    actualDurationSec?: NullableIntFieldUpdateOperationsInput | number | null
    actualDistanceM?: NullableIntFieldUpdateOperationsInput | number | null
    actualRpe?: NullableFloatFieldUpdateOperationsInput | number | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ProgramListRelationFilter = {
    every?: ProgramWhereInput
    some?: ProgramWhereInput
    none?: ProgramWhereInput
  }

  export type ExerciseTemplateListRelationFilter = {
    every?: ExerciseTemplateWhereInput
    some?: ExerciseTemplateWhereInput
    none?: ExerciseTemplateWhereInput
  }

  export type ProgramTemplateListRelationFilter = {
    every?: ProgramTemplateWhereInput
    some?: ProgramTemplateWhereInput
    none?: ProgramTemplateWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProgramOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExerciseTemplateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProgramTemplateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ExerciseListRelationFilter = {
    every?: ExerciseWhereInput
    some?: ExerciseWhereInput
    none?: ExerciseWhereInput
  }

  export type ExerciseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MuscleGroupCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    shortName?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MuscleGroupMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    shortName?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MuscleGroupMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    shortName?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumProgramGoalNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ProgramGoal | EnumProgramGoalFieldRefInput<$PrismaModel> | null
    in?: $Enums.ProgramGoal[] | ListEnumProgramGoalFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ProgramGoal[] | ListEnumProgramGoalFieldRefInput<$PrismaModel> | null
    not?: NestedEnumProgramGoalNullableFilter<$PrismaModel> | $Enums.ProgramGoal | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type WeekListRelationFilter = {
    every?: WeekWhereInput
    some?: WeekWhereInput
    none?: WeekWhereInput
  }

  export type WeekNullableScalarRelationFilter = {
    is?: WeekWhereInput | null
    isNot?: WeekWhereInput | null
  }

  export type WeekOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProgramCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    goal?: SortOrder
    length?: SortOrder
    days?: SortOrder
    currentWeekId?: SortOrder
    completed?: SortOrder
    aiPlanJson?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProgramAvgOrderByAggregateInput = {
    length?: SortOrder
    days?: SortOrder
  }

  export type ProgramMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    goal?: SortOrder
    length?: SortOrder
    days?: SortOrder
    currentWeekId?: SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProgramMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    goal?: SortOrder
    length?: SortOrder
    days?: SortOrder
    currentWeekId?: SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProgramSumOrderByAggregateInput = {
    length?: SortOrder
    days?: SortOrder
  }

  export type EnumProgramGoalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProgramGoal | EnumProgramGoalFieldRefInput<$PrismaModel> | null
    in?: $Enums.ProgramGoal[] | ListEnumProgramGoalFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ProgramGoal[] | ListEnumProgramGoalFieldRefInput<$PrismaModel> | null
    not?: NestedEnumProgramGoalNullableWithAggregatesFilter<$PrismaModel> | $Enums.ProgramGoal | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumProgramGoalNullableFilter<$PrismaModel>
    _max?: NestedEnumProgramGoalNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type ProgramTemplateCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    goal?: SortOrder
    length?: SortOrder
    days?: SortOrder
    structureJson?: SortOrder
    aiPlanJson?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProgramTemplateAvgOrderByAggregateInput = {
    length?: SortOrder
    days?: SortOrder
  }

  export type ProgramTemplateMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    goal?: SortOrder
    length?: SortOrder
    days?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProgramTemplateMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    goal?: SortOrder
    length?: SortOrder
    days?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProgramTemplateSumOrderByAggregateInput = {
    length?: SortOrder
    days?: SortOrder
  }

  export type ProgramScalarRelationFilter = {
    is?: ProgramWhereInput
    isNot?: ProgramWhereInput
  }

  export type WorkoutListRelationFilter = {
    every?: WorkoutWhereInput
    some?: WorkoutWhereInput
    none?: WorkoutWhereInput
  }

  export type ProgramNullableScalarRelationFilter = {
    is?: ProgramWhereInput | null
    isNot?: ProgramWhereInput | null
  }

  export type WorkoutOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WeekProgramIdWeekNumberCompoundUniqueInput = {
    programId: string
    weekNumber: number
  }

  export type WeekCountOrderByAggregateInput = {
    id?: SortOrder
    programId?: SortOrder
    weekNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WeekAvgOrderByAggregateInput = {
    weekNumber?: SortOrder
  }

  export type WeekMaxOrderByAggregateInput = {
    id?: SortOrder
    programId?: SortOrder
    weekNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WeekMinOrderByAggregateInput = {
    id?: SortOrder
    programId?: SortOrder
    weekNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WeekSumOrderByAggregateInput = {
    weekNumber?: SortOrder
  }

  export type EnumWorkoutModeFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkoutMode | EnumWorkoutModeFieldRefInput<$PrismaModel>
    in?: $Enums.WorkoutMode[] | ListEnumWorkoutModeFieldRefInput<$PrismaModel>
    notIn?: $Enums.WorkoutMode[] | ListEnumWorkoutModeFieldRefInput<$PrismaModel>
    not?: NestedEnumWorkoutModeFilter<$PrismaModel> | $Enums.WorkoutMode
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type WeekScalarRelationFilter = {
    is?: WeekWhereInput
    isNot?: WeekWhereInput
  }

  export type ExerciseNullableScalarRelationFilter = {
    is?: ExerciseWhereInput | null
    isNot?: ExerciseWhereInput | null
  }

  export type WorkoutWeekIdDayNumberCompoundUniqueInput = {
    weekId: string
    dayNumber: number
  }

  export type WorkoutCountOrderByAggregateInput = {
    id?: SortOrder
    weekId?: SortOrder
    dayNumber?: SortOrder
    name?: SortOrder
    mode?: SortOrder
    focusMuscleGroups?: SortOrder
    notes?: SortOrder
    currentExerciseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    completed?: SortOrder
  }

  export type WorkoutAvgOrderByAggregateInput = {
    dayNumber?: SortOrder
  }

  export type WorkoutMaxOrderByAggregateInput = {
    id?: SortOrder
    weekId?: SortOrder
    dayNumber?: SortOrder
    name?: SortOrder
    mode?: SortOrder
    notes?: SortOrder
    currentExerciseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    completed?: SortOrder
  }

  export type WorkoutMinOrderByAggregateInput = {
    id?: SortOrder
    weekId?: SortOrder
    dayNumber?: SortOrder
    name?: SortOrder
    mode?: SortOrder
    notes?: SortOrder
    currentExerciseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    completed?: SortOrder
  }

  export type WorkoutSumOrderByAggregateInput = {
    dayNumber?: SortOrder
  }

  export type EnumWorkoutModeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkoutMode | EnumWorkoutModeFieldRefInput<$PrismaModel>
    in?: $Enums.WorkoutMode[] | ListEnumWorkoutModeFieldRefInput<$PrismaModel>
    notIn?: $Enums.WorkoutMode[] | ListEnumWorkoutModeFieldRefInput<$PrismaModel>
    not?: NestedEnumWorkoutModeWithAggregatesFilter<$PrismaModel> | $Enums.WorkoutMode
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWorkoutModeFilter<$PrismaModel>
    _max?: NestedEnumWorkoutModeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type MuscleGroupNullableScalarRelationFilter = {
    is?: MuscleGroupWhereInput | null
    isNot?: MuscleGroupWhereInput | null
  }

  export type ExerciseTemplateCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    muscleGroupId?: SortOrder
    defaultSets?: SortOrder
    defaultRepsLower?: SortOrder
    defaultRepsUpper?: SortOrder
    defaultRir?: SortOrder
    defaultDetails?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExerciseTemplateAvgOrderByAggregateInput = {
    defaultSets?: SortOrder
    defaultRepsLower?: SortOrder
    defaultRepsUpper?: SortOrder
    defaultRir?: SortOrder
  }

  export type ExerciseTemplateMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    muscleGroupId?: SortOrder
    defaultSets?: SortOrder
    defaultRepsLower?: SortOrder
    defaultRepsUpper?: SortOrder
    defaultRir?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExerciseTemplateMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    muscleGroupId?: SortOrder
    defaultSets?: SortOrder
    defaultRepsLower?: SortOrder
    defaultRepsUpper?: SortOrder
    defaultRir?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExerciseTemplateSumOrderByAggregateInput = {
    defaultSets?: SortOrder
    defaultRepsLower?: SortOrder
    defaultRepsUpper?: SortOrder
    defaultRir?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumExerciseTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ExerciseType | EnumExerciseTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ExerciseType[] | ListEnumExerciseTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExerciseType[] | ListEnumExerciseTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumExerciseTypeFilter<$PrismaModel> | $Enums.ExerciseType
  }

  export type WorkoutScalarRelationFilter = {
    is?: WorkoutWhereInput
    isNot?: WorkoutWhereInput
  }

  export type ExerciseTemplateNullableScalarRelationFilter = {
    is?: ExerciseTemplateWhereInput | null
    isNot?: ExerciseTemplateWhereInput | null
  }

  export type SetListRelationFilter = {
    every?: SetWhereInput
    some?: SetWhereInput
    none?: SetWhereInput
  }

  export type SetNullableScalarRelationFilter = {
    is?: SetWhereInput | null
    isNot?: SetWhereInput | null
  }

  export type WorkoutNullableScalarRelationFilter = {
    is?: WorkoutWhereInput | null
    isNot?: WorkoutWhereInput | null
  }

  export type SetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExerciseWorkoutIdOrderCompoundUniqueInput = {
    workoutId: string
    order: number
  }

  export type ExerciseCountOrderByAggregateInput = {
    id?: SortOrder
    workoutId?: SortOrder
    order?: SortOrder
    exerciseType?: SortOrder
    exerciseTemplateId?: SortOrder
    muscleGroupId?: SortOrder
    details?: SortOrder
    currentSetId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    completed?: SortOrder
  }

  export type ExerciseAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type ExerciseMaxOrderByAggregateInput = {
    id?: SortOrder
    workoutId?: SortOrder
    order?: SortOrder
    exerciseType?: SortOrder
    exerciseTemplateId?: SortOrder
    muscleGroupId?: SortOrder
    details?: SortOrder
    currentSetId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    completed?: SortOrder
  }

  export type ExerciseMinOrderByAggregateInput = {
    id?: SortOrder
    workoutId?: SortOrder
    order?: SortOrder
    exerciseType?: SortOrder
    exerciseTemplateId?: SortOrder
    muscleGroupId?: SortOrder
    details?: SortOrder
    currentSetId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    completed?: SortOrder
  }

  export type ExerciseSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type EnumExerciseTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExerciseType | EnumExerciseTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ExerciseType[] | ListEnumExerciseTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExerciseType[] | ListEnumExerciseTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumExerciseTypeWithAggregatesFilter<$PrismaModel> | $Enums.ExerciseType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumExerciseTypeFilter<$PrismaModel>
    _max?: NestedEnumExerciseTypeFilter<$PrismaModel>
  }

  export type EnumSetTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SetType | EnumSetTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SetType[] | ListEnumSetTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SetType[] | ListEnumSetTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSetTypeFilter<$PrismaModel> | $Enums.SetType
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type ExerciseScalarRelationFilter = {
    is?: ExerciseWhereInput
    isNot?: ExerciseWhereInput
  }

  export type SetExerciseIdSetNumberCompoundUniqueInput = {
    exerciseId: string
    setNumber: number
  }

  export type SetCountOrderByAggregateInput = {
    id?: SortOrder
    exerciseId?: SortOrder
    setNumber?: SortOrder
    type?: SortOrder
    targetReps?: SortOrder
    targetWeightKg?: SortOrder
    minWeightKg?: SortOrder
    maxWeightKg?: SortOrder
    rir?: SortOrder
    rpe?: SortOrder
    targetDurationSec?: SortOrder
    targetDistanceM?: SortOrder
    targetPaceSecPerKm?: SortOrder
    intensityZone?: SortOrder
    actualReps?: SortOrder
    actualWeightKg?: SortOrder
    actualDurationSec?: SortOrder
    actualDistanceM?: SortOrder
    actualRpe?: SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SetAvgOrderByAggregateInput = {
    setNumber?: SortOrder
    targetReps?: SortOrder
    targetWeightKg?: SortOrder
    minWeightKg?: SortOrder
    maxWeightKg?: SortOrder
    rir?: SortOrder
    rpe?: SortOrder
    targetDurationSec?: SortOrder
    targetDistanceM?: SortOrder
    targetPaceSecPerKm?: SortOrder
    actualReps?: SortOrder
    actualWeightKg?: SortOrder
    actualDurationSec?: SortOrder
    actualDistanceM?: SortOrder
    actualRpe?: SortOrder
  }

  export type SetMaxOrderByAggregateInput = {
    id?: SortOrder
    exerciseId?: SortOrder
    setNumber?: SortOrder
    type?: SortOrder
    targetReps?: SortOrder
    targetWeightKg?: SortOrder
    minWeightKg?: SortOrder
    maxWeightKg?: SortOrder
    rir?: SortOrder
    rpe?: SortOrder
    targetDurationSec?: SortOrder
    targetDistanceM?: SortOrder
    targetPaceSecPerKm?: SortOrder
    intensityZone?: SortOrder
    actualReps?: SortOrder
    actualWeightKg?: SortOrder
    actualDurationSec?: SortOrder
    actualDistanceM?: SortOrder
    actualRpe?: SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SetMinOrderByAggregateInput = {
    id?: SortOrder
    exerciseId?: SortOrder
    setNumber?: SortOrder
    type?: SortOrder
    targetReps?: SortOrder
    targetWeightKg?: SortOrder
    minWeightKg?: SortOrder
    maxWeightKg?: SortOrder
    rir?: SortOrder
    rpe?: SortOrder
    targetDurationSec?: SortOrder
    targetDistanceM?: SortOrder
    targetPaceSecPerKm?: SortOrder
    intensityZone?: SortOrder
    actualReps?: SortOrder
    actualWeightKg?: SortOrder
    actualDurationSec?: SortOrder
    actualDistanceM?: SortOrder
    actualRpe?: SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SetSumOrderByAggregateInput = {
    setNumber?: SortOrder
    targetReps?: SortOrder
    targetWeightKg?: SortOrder
    minWeightKg?: SortOrder
    maxWeightKg?: SortOrder
    rir?: SortOrder
    rpe?: SortOrder
    targetDurationSec?: SortOrder
    targetDistanceM?: SortOrder
    targetPaceSecPerKm?: SortOrder
    actualReps?: SortOrder
    actualWeightKg?: SortOrder
    actualDurationSec?: SortOrder
    actualDistanceM?: SortOrder
    actualRpe?: SortOrder
  }

  export type EnumSetTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SetType | EnumSetTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SetType[] | ListEnumSetTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SetType[] | ListEnumSetTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSetTypeWithAggregatesFilter<$PrismaModel> | $Enums.SetType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSetTypeFilter<$PrismaModel>
    _max?: NestedEnumSetTypeFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type ProgramCreateNestedManyWithoutUserInput = {
    create?: XOR<ProgramCreateWithoutUserInput, ProgramUncheckedCreateWithoutUserInput> | ProgramCreateWithoutUserInput[] | ProgramUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProgramCreateOrConnectWithoutUserInput | ProgramCreateOrConnectWithoutUserInput[]
    createMany?: ProgramCreateManyUserInputEnvelope
    connect?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
  }

  export type ExerciseTemplateCreateNestedManyWithoutUserInput = {
    create?: XOR<ExerciseTemplateCreateWithoutUserInput, ExerciseTemplateUncheckedCreateWithoutUserInput> | ExerciseTemplateCreateWithoutUserInput[] | ExerciseTemplateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExerciseTemplateCreateOrConnectWithoutUserInput | ExerciseTemplateCreateOrConnectWithoutUserInput[]
    createMany?: ExerciseTemplateCreateManyUserInputEnvelope
    connect?: ExerciseTemplateWhereUniqueInput | ExerciseTemplateWhereUniqueInput[]
  }

  export type ProgramTemplateCreateNestedManyWithoutUserInput = {
    create?: XOR<ProgramTemplateCreateWithoutUserInput, ProgramTemplateUncheckedCreateWithoutUserInput> | ProgramTemplateCreateWithoutUserInput[] | ProgramTemplateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProgramTemplateCreateOrConnectWithoutUserInput | ProgramTemplateCreateOrConnectWithoutUserInput[]
    createMany?: ProgramTemplateCreateManyUserInputEnvelope
    connect?: ProgramTemplateWhereUniqueInput | ProgramTemplateWhereUniqueInput[]
  }

  export type ProgramUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProgramCreateWithoutUserInput, ProgramUncheckedCreateWithoutUserInput> | ProgramCreateWithoutUserInput[] | ProgramUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProgramCreateOrConnectWithoutUserInput | ProgramCreateOrConnectWithoutUserInput[]
    createMany?: ProgramCreateManyUserInputEnvelope
    connect?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
  }

  export type ExerciseTemplateUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ExerciseTemplateCreateWithoutUserInput, ExerciseTemplateUncheckedCreateWithoutUserInput> | ExerciseTemplateCreateWithoutUserInput[] | ExerciseTemplateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExerciseTemplateCreateOrConnectWithoutUserInput | ExerciseTemplateCreateOrConnectWithoutUserInput[]
    createMany?: ExerciseTemplateCreateManyUserInputEnvelope
    connect?: ExerciseTemplateWhereUniqueInput | ExerciseTemplateWhereUniqueInput[]
  }

  export type ProgramTemplateUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProgramTemplateCreateWithoutUserInput, ProgramTemplateUncheckedCreateWithoutUserInput> | ProgramTemplateCreateWithoutUserInput[] | ProgramTemplateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProgramTemplateCreateOrConnectWithoutUserInput | ProgramTemplateCreateOrConnectWithoutUserInput[]
    createMany?: ProgramTemplateCreateManyUserInputEnvelope
    connect?: ProgramTemplateWhereUniqueInput | ProgramTemplateWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProgramUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProgramCreateWithoutUserInput, ProgramUncheckedCreateWithoutUserInput> | ProgramCreateWithoutUserInput[] | ProgramUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProgramCreateOrConnectWithoutUserInput | ProgramCreateOrConnectWithoutUserInput[]
    upsert?: ProgramUpsertWithWhereUniqueWithoutUserInput | ProgramUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProgramCreateManyUserInputEnvelope
    set?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
    disconnect?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
    delete?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
    connect?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
    update?: ProgramUpdateWithWhereUniqueWithoutUserInput | ProgramUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProgramUpdateManyWithWhereWithoutUserInput | ProgramUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProgramScalarWhereInput | ProgramScalarWhereInput[]
  }

  export type ExerciseTemplateUpdateManyWithoutUserNestedInput = {
    create?: XOR<ExerciseTemplateCreateWithoutUserInput, ExerciseTemplateUncheckedCreateWithoutUserInput> | ExerciseTemplateCreateWithoutUserInput[] | ExerciseTemplateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExerciseTemplateCreateOrConnectWithoutUserInput | ExerciseTemplateCreateOrConnectWithoutUserInput[]
    upsert?: ExerciseTemplateUpsertWithWhereUniqueWithoutUserInput | ExerciseTemplateUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ExerciseTemplateCreateManyUserInputEnvelope
    set?: ExerciseTemplateWhereUniqueInput | ExerciseTemplateWhereUniqueInput[]
    disconnect?: ExerciseTemplateWhereUniqueInput | ExerciseTemplateWhereUniqueInput[]
    delete?: ExerciseTemplateWhereUniqueInput | ExerciseTemplateWhereUniqueInput[]
    connect?: ExerciseTemplateWhereUniqueInput | ExerciseTemplateWhereUniqueInput[]
    update?: ExerciseTemplateUpdateWithWhereUniqueWithoutUserInput | ExerciseTemplateUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ExerciseTemplateUpdateManyWithWhereWithoutUserInput | ExerciseTemplateUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ExerciseTemplateScalarWhereInput | ExerciseTemplateScalarWhereInput[]
  }

  export type ProgramTemplateUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProgramTemplateCreateWithoutUserInput, ProgramTemplateUncheckedCreateWithoutUserInput> | ProgramTemplateCreateWithoutUserInput[] | ProgramTemplateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProgramTemplateCreateOrConnectWithoutUserInput | ProgramTemplateCreateOrConnectWithoutUserInput[]
    upsert?: ProgramTemplateUpsertWithWhereUniqueWithoutUserInput | ProgramTemplateUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProgramTemplateCreateManyUserInputEnvelope
    set?: ProgramTemplateWhereUniqueInput | ProgramTemplateWhereUniqueInput[]
    disconnect?: ProgramTemplateWhereUniqueInput | ProgramTemplateWhereUniqueInput[]
    delete?: ProgramTemplateWhereUniqueInput | ProgramTemplateWhereUniqueInput[]
    connect?: ProgramTemplateWhereUniqueInput | ProgramTemplateWhereUniqueInput[]
    update?: ProgramTemplateUpdateWithWhereUniqueWithoutUserInput | ProgramTemplateUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProgramTemplateUpdateManyWithWhereWithoutUserInput | ProgramTemplateUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProgramTemplateScalarWhereInput | ProgramTemplateScalarWhereInput[]
  }

  export type ProgramUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProgramCreateWithoutUserInput, ProgramUncheckedCreateWithoutUserInput> | ProgramCreateWithoutUserInput[] | ProgramUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProgramCreateOrConnectWithoutUserInput | ProgramCreateOrConnectWithoutUserInput[]
    upsert?: ProgramUpsertWithWhereUniqueWithoutUserInput | ProgramUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProgramCreateManyUserInputEnvelope
    set?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
    disconnect?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
    delete?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
    connect?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
    update?: ProgramUpdateWithWhereUniqueWithoutUserInput | ProgramUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProgramUpdateManyWithWhereWithoutUserInput | ProgramUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProgramScalarWhereInput | ProgramScalarWhereInput[]
  }

  export type ExerciseTemplateUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ExerciseTemplateCreateWithoutUserInput, ExerciseTemplateUncheckedCreateWithoutUserInput> | ExerciseTemplateCreateWithoutUserInput[] | ExerciseTemplateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExerciseTemplateCreateOrConnectWithoutUserInput | ExerciseTemplateCreateOrConnectWithoutUserInput[]
    upsert?: ExerciseTemplateUpsertWithWhereUniqueWithoutUserInput | ExerciseTemplateUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ExerciseTemplateCreateManyUserInputEnvelope
    set?: ExerciseTemplateWhereUniqueInput | ExerciseTemplateWhereUniqueInput[]
    disconnect?: ExerciseTemplateWhereUniqueInput | ExerciseTemplateWhereUniqueInput[]
    delete?: ExerciseTemplateWhereUniqueInput | ExerciseTemplateWhereUniqueInput[]
    connect?: ExerciseTemplateWhereUniqueInput | ExerciseTemplateWhereUniqueInput[]
    update?: ExerciseTemplateUpdateWithWhereUniqueWithoutUserInput | ExerciseTemplateUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ExerciseTemplateUpdateManyWithWhereWithoutUserInput | ExerciseTemplateUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ExerciseTemplateScalarWhereInput | ExerciseTemplateScalarWhereInput[]
  }

  export type ProgramTemplateUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProgramTemplateCreateWithoutUserInput, ProgramTemplateUncheckedCreateWithoutUserInput> | ProgramTemplateCreateWithoutUserInput[] | ProgramTemplateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProgramTemplateCreateOrConnectWithoutUserInput | ProgramTemplateCreateOrConnectWithoutUserInput[]
    upsert?: ProgramTemplateUpsertWithWhereUniqueWithoutUserInput | ProgramTemplateUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProgramTemplateCreateManyUserInputEnvelope
    set?: ProgramTemplateWhereUniqueInput | ProgramTemplateWhereUniqueInput[]
    disconnect?: ProgramTemplateWhereUniqueInput | ProgramTemplateWhereUniqueInput[]
    delete?: ProgramTemplateWhereUniqueInput | ProgramTemplateWhereUniqueInput[]
    connect?: ProgramTemplateWhereUniqueInput | ProgramTemplateWhereUniqueInput[]
    update?: ProgramTemplateUpdateWithWhereUniqueWithoutUserInput | ProgramTemplateUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProgramTemplateUpdateManyWithWhereWithoutUserInput | ProgramTemplateUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProgramTemplateScalarWhereInput | ProgramTemplateScalarWhereInput[]
  }

  export type ExerciseCreateNestedManyWithoutMuscleGroupInput = {
    create?: XOR<ExerciseCreateWithoutMuscleGroupInput, ExerciseUncheckedCreateWithoutMuscleGroupInput> | ExerciseCreateWithoutMuscleGroupInput[] | ExerciseUncheckedCreateWithoutMuscleGroupInput[]
    connectOrCreate?: ExerciseCreateOrConnectWithoutMuscleGroupInput | ExerciseCreateOrConnectWithoutMuscleGroupInput[]
    createMany?: ExerciseCreateManyMuscleGroupInputEnvelope
    connect?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
  }

  export type ExerciseTemplateCreateNestedManyWithoutMuscleGroupInput = {
    create?: XOR<ExerciseTemplateCreateWithoutMuscleGroupInput, ExerciseTemplateUncheckedCreateWithoutMuscleGroupInput> | ExerciseTemplateCreateWithoutMuscleGroupInput[] | ExerciseTemplateUncheckedCreateWithoutMuscleGroupInput[]
    connectOrCreate?: ExerciseTemplateCreateOrConnectWithoutMuscleGroupInput | ExerciseTemplateCreateOrConnectWithoutMuscleGroupInput[]
    createMany?: ExerciseTemplateCreateManyMuscleGroupInputEnvelope
    connect?: ExerciseTemplateWhereUniqueInput | ExerciseTemplateWhereUniqueInput[]
  }

  export type ExerciseUncheckedCreateNestedManyWithoutMuscleGroupInput = {
    create?: XOR<ExerciseCreateWithoutMuscleGroupInput, ExerciseUncheckedCreateWithoutMuscleGroupInput> | ExerciseCreateWithoutMuscleGroupInput[] | ExerciseUncheckedCreateWithoutMuscleGroupInput[]
    connectOrCreate?: ExerciseCreateOrConnectWithoutMuscleGroupInput | ExerciseCreateOrConnectWithoutMuscleGroupInput[]
    createMany?: ExerciseCreateManyMuscleGroupInputEnvelope
    connect?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
  }

  export type ExerciseTemplateUncheckedCreateNestedManyWithoutMuscleGroupInput = {
    create?: XOR<ExerciseTemplateCreateWithoutMuscleGroupInput, ExerciseTemplateUncheckedCreateWithoutMuscleGroupInput> | ExerciseTemplateCreateWithoutMuscleGroupInput[] | ExerciseTemplateUncheckedCreateWithoutMuscleGroupInput[]
    connectOrCreate?: ExerciseTemplateCreateOrConnectWithoutMuscleGroupInput | ExerciseTemplateCreateOrConnectWithoutMuscleGroupInput[]
    createMany?: ExerciseTemplateCreateManyMuscleGroupInputEnvelope
    connect?: ExerciseTemplateWhereUniqueInput | ExerciseTemplateWhereUniqueInput[]
  }

  export type ExerciseUpdateManyWithoutMuscleGroupNestedInput = {
    create?: XOR<ExerciseCreateWithoutMuscleGroupInput, ExerciseUncheckedCreateWithoutMuscleGroupInput> | ExerciseCreateWithoutMuscleGroupInput[] | ExerciseUncheckedCreateWithoutMuscleGroupInput[]
    connectOrCreate?: ExerciseCreateOrConnectWithoutMuscleGroupInput | ExerciseCreateOrConnectWithoutMuscleGroupInput[]
    upsert?: ExerciseUpsertWithWhereUniqueWithoutMuscleGroupInput | ExerciseUpsertWithWhereUniqueWithoutMuscleGroupInput[]
    createMany?: ExerciseCreateManyMuscleGroupInputEnvelope
    set?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    disconnect?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    delete?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    connect?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    update?: ExerciseUpdateWithWhereUniqueWithoutMuscleGroupInput | ExerciseUpdateWithWhereUniqueWithoutMuscleGroupInput[]
    updateMany?: ExerciseUpdateManyWithWhereWithoutMuscleGroupInput | ExerciseUpdateManyWithWhereWithoutMuscleGroupInput[]
    deleteMany?: ExerciseScalarWhereInput | ExerciseScalarWhereInput[]
  }

  export type ExerciseTemplateUpdateManyWithoutMuscleGroupNestedInput = {
    create?: XOR<ExerciseTemplateCreateWithoutMuscleGroupInput, ExerciseTemplateUncheckedCreateWithoutMuscleGroupInput> | ExerciseTemplateCreateWithoutMuscleGroupInput[] | ExerciseTemplateUncheckedCreateWithoutMuscleGroupInput[]
    connectOrCreate?: ExerciseTemplateCreateOrConnectWithoutMuscleGroupInput | ExerciseTemplateCreateOrConnectWithoutMuscleGroupInput[]
    upsert?: ExerciseTemplateUpsertWithWhereUniqueWithoutMuscleGroupInput | ExerciseTemplateUpsertWithWhereUniqueWithoutMuscleGroupInput[]
    createMany?: ExerciseTemplateCreateManyMuscleGroupInputEnvelope
    set?: ExerciseTemplateWhereUniqueInput | ExerciseTemplateWhereUniqueInput[]
    disconnect?: ExerciseTemplateWhereUniqueInput | ExerciseTemplateWhereUniqueInput[]
    delete?: ExerciseTemplateWhereUniqueInput | ExerciseTemplateWhereUniqueInput[]
    connect?: ExerciseTemplateWhereUniqueInput | ExerciseTemplateWhereUniqueInput[]
    update?: ExerciseTemplateUpdateWithWhereUniqueWithoutMuscleGroupInput | ExerciseTemplateUpdateWithWhereUniqueWithoutMuscleGroupInput[]
    updateMany?: ExerciseTemplateUpdateManyWithWhereWithoutMuscleGroupInput | ExerciseTemplateUpdateManyWithWhereWithoutMuscleGroupInput[]
    deleteMany?: ExerciseTemplateScalarWhereInput | ExerciseTemplateScalarWhereInput[]
  }

  export type ExerciseUncheckedUpdateManyWithoutMuscleGroupNestedInput = {
    create?: XOR<ExerciseCreateWithoutMuscleGroupInput, ExerciseUncheckedCreateWithoutMuscleGroupInput> | ExerciseCreateWithoutMuscleGroupInput[] | ExerciseUncheckedCreateWithoutMuscleGroupInput[]
    connectOrCreate?: ExerciseCreateOrConnectWithoutMuscleGroupInput | ExerciseCreateOrConnectWithoutMuscleGroupInput[]
    upsert?: ExerciseUpsertWithWhereUniqueWithoutMuscleGroupInput | ExerciseUpsertWithWhereUniqueWithoutMuscleGroupInput[]
    createMany?: ExerciseCreateManyMuscleGroupInputEnvelope
    set?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    disconnect?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    delete?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    connect?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    update?: ExerciseUpdateWithWhereUniqueWithoutMuscleGroupInput | ExerciseUpdateWithWhereUniqueWithoutMuscleGroupInput[]
    updateMany?: ExerciseUpdateManyWithWhereWithoutMuscleGroupInput | ExerciseUpdateManyWithWhereWithoutMuscleGroupInput[]
    deleteMany?: ExerciseScalarWhereInput | ExerciseScalarWhereInput[]
  }

  export type ExerciseTemplateUncheckedUpdateManyWithoutMuscleGroupNestedInput = {
    create?: XOR<ExerciseTemplateCreateWithoutMuscleGroupInput, ExerciseTemplateUncheckedCreateWithoutMuscleGroupInput> | ExerciseTemplateCreateWithoutMuscleGroupInput[] | ExerciseTemplateUncheckedCreateWithoutMuscleGroupInput[]
    connectOrCreate?: ExerciseTemplateCreateOrConnectWithoutMuscleGroupInput | ExerciseTemplateCreateOrConnectWithoutMuscleGroupInput[]
    upsert?: ExerciseTemplateUpsertWithWhereUniqueWithoutMuscleGroupInput | ExerciseTemplateUpsertWithWhereUniqueWithoutMuscleGroupInput[]
    createMany?: ExerciseTemplateCreateManyMuscleGroupInputEnvelope
    set?: ExerciseTemplateWhereUniqueInput | ExerciseTemplateWhereUniqueInput[]
    disconnect?: ExerciseTemplateWhereUniqueInput | ExerciseTemplateWhereUniqueInput[]
    delete?: ExerciseTemplateWhereUniqueInput | ExerciseTemplateWhereUniqueInput[]
    connect?: ExerciseTemplateWhereUniqueInput | ExerciseTemplateWhereUniqueInput[]
    update?: ExerciseTemplateUpdateWithWhereUniqueWithoutMuscleGroupInput | ExerciseTemplateUpdateWithWhereUniqueWithoutMuscleGroupInput[]
    updateMany?: ExerciseTemplateUpdateManyWithWhereWithoutMuscleGroupInput | ExerciseTemplateUpdateManyWithWhereWithoutMuscleGroupInput[]
    deleteMany?: ExerciseTemplateScalarWhereInput | ExerciseTemplateScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutProgramsInput = {
    create?: XOR<UserCreateWithoutProgramsInput, UserUncheckedCreateWithoutProgramsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProgramsInput
    connect?: UserWhereUniqueInput
  }

  export type WeekCreateNestedManyWithoutProgramInput = {
    create?: XOR<WeekCreateWithoutProgramInput, WeekUncheckedCreateWithoutProgramInput> | WeekCreateWithoutProgramInput[] | WeekUncheckedCreateWithoutProgramInput[]
    connectOrCreate?: WeekCreateOrConnectWithoutProgramInput | WeekCreateOrConnectWithoutProgramInput[]
    createMany?: WeekCreateManyProgramInputEnvelope
    connect?: WeekWhereUniqueInput | WeekWhereUniqueInput[]
  }

  export type WeekCreateNestedOneWithoutCurrentForProgramInput = {
    create?: XOR<WeekCreateWithoutCurrentForProgramInput, WeekUncheckedCreateWithoutCurrentForProgramInput>
    connectOrCreate?: WeekCreateOrConnectWithoutCurrentForProgramInput
    connect?: WeekWhereUniqueInput
  }

  export type WeekUncheckedCreateNestedManyWithoutProgramInput = {
    create?: XOR<WeekCreateWithoutProgramInput, WeekUncheckedCreateWithoutProgramInput> | WeekCreateWithoutProgramInput[] | WeekUncheckedCreateWithoutProgramInput[]
    connectOrCreate?: WeekCreateOrConnectWithoutProgramInput | WeekCreateOrConnectWithoutProgramInput[]
    createMany?: WeekCreateManyProgramInputEnvelope
    connect?: WeekWhereUniqueInput | WeekWhereUniqueInput[]
  }

  export type NullableEnumProgramGoalFieldUpdateOperationsInput = {
    set?: $Enums.ProgramGoal | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneWithoutProgramsNestedInput = {
    create?: XOR<UserCreateWithoutProgramsInput, UserUncheckedCreateWithoutProgramsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProgramsInput
    upsert?: UserUpsertWithoutProgramsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProgramsInput, UserUpdateWithoutProgramsInput>, UserUncheckedUpdateWithoutProgramsInput>
  }

  export type WeekUpdateManyWithoutProgramNestedInput = {
    create?: XOR<WeekCreateWithoutProgramInput, WeekUncheckedCreateWithoutProgramInput> | WeekCreateWithoutProgramInput[] | WeekUncheckedCreateWithoutProgramInput[]
    connectOrCreate?: WeekCreateOrConnectWithoutProgramInput | WeekCreateOrConnectWithoutProgramInput[]
    upsert?: WeekUpsertWithWhereUniqueWithoutProgramInput | WeekUpsertWithWhereUniqueWithoutProgramInput[]
    createMany?: WeekCreateManyProgramInputEnvelope
    set?: WeekWhereUniqueInput | WeekWhereUniqueInput[]
    disconnect?: WeekWhereUniqueInput | WeekWhereUniqueInput[]
    delete?: WeekWhereUniqueInput | WeekWhereUniqueInput[]
    connect?: WeekWhereUniqueInput | WeekWhereUniqueInput[]
    update?: WeekUpdateWithWhereUniqueWithoutProgramInput | WeekUpdateWithWhereUniqueWithoutProgramInput[]
    updateMany?: WeekUpdateManyWithWhereWithoutProgramInput | WeekUpdateManyWithWhereWithoutProgramInput[]
    deleteMany?: WeekScalarWhereInput | WeekScalarWhereInput[]
  }

  export type WeekUpdateOneWithoutCurrentForProgramNestedInput = {
    create?: XOR<WeekCreateWithoutCurrentForProgramInput, WeekUncheckedCreateWithoutCurrentForProgramInput>
    connectOrCreate?: WeekCreateOrConnectWithoutCurrentForProgramInput
    upsert?: WeekUpsertWithoutCurrentForProgramInput
    disconnect?: WeekWhereInput | boolean
    delete?: WeekWhereInput | boolean
    connect?: WeekWhereUniqueInput
    update?: XOR<XOR<WeekUpdateToOneWithWhereWithoutCurrentForProgramInput, WeekUpdateWithoutCurrentForProgramInput>, WeekUncheckedUpdateWithoutCurrentForProgramInput>
  }

  export type WeekUncheckedUpdateManyWithoutProgramNestedInput = {
    create?: XOR<WeekCreateWithoutProgramInput, WeekUncheckedCreateWithoutProgramInput> | WeekCreateWithoutProgramInput[] | WeekUncheckedCreateWithoutProgramInput[]
    connectOrCreate?: WeekCreateOrConnectWithoutProgramInput | WeekCreateOrConnectWithoutProgramInput[]
    upsert?: WeekUpsertWithWhereUniqueWithoutProgramInput | WeekUpsertWithWhereUniqueWithoutProgramInput[]
    createMany?: WeekCreateManyProgramInputEnvelope
    set?: WeekWhereUniqueInput | WeekWhereUniqueInput[]
    disconnect?: WeekWhereUniqueInput | WeekWhereUniqueInput[]
    delete?: WeekWhereUniqueInput | WeekWhereUniqueInput[]
    connect?: WeekWhereUniqueInput | WeekWhereUniqueInput[]
    update?: WeekUpdateWithWhereUniqueWithoutProgramInput | WeekUpdateWithWhereUniqueWithoutProgramInput[]
    updateMany?: WeekUpdateManyWithWhereWithoutProgramInput | WeekUpdateManyWithWhereWithoutProgramInput[]
    deleteMany?: WeekScalarWhereInput | WeekScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutProgramTemplatesInput = {
    create?: XOR<UserCreateWithoutProgramTemplatesInput, UserUncheckedCreateWithoutProgramTemplatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutProgramTemplatesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutProgramTemplatesNestedInput = {
    create?: XOR<UserCreateWithoutProgramTemplatesInput, UserUncheckedCreateWithoutProgramTemplatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutProgramTemplatesInput
    upsert?: UserUpsertWithoutProgramTemplatesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProgramTemplatesInput, UserUpdateWithoutProgramTemplatesInput>, UserUncheckedUpdateWithoutProgramTemplatesInput>
  }

  export type ProgramCreateNestedOneWithoutWeeksInput = {
    create?: XOR<ProgramCreateWithoutWeeksInput, ProgramUncheckedCreateWithoutWeeksInput>
    connectOrCreate?: ProgramCreateOrConnectWithoutWeeksInput
    connect?: ProgramWhereUniqueInput
  }

  export type WorkoutCreateNestedManyWithoutWeekInput = {
    create?: XOR<WorkoutCreateWithoutWeekInput, WorkoutUncheckedCreateWithoutWeekInput> | WorkoutCreateWithoutWeekInput[] | WorkoutUncheckedCreateWithoutWeekInput[]
    connectOrCreate?: WorkoutCreateOrConnectWithoutWeekInput | WorkoutCreateOrConnectWithoutWeekInput[]
    createMany?: WorkoutCreateManyWeekInputEnvelope
    connect?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
  }

  export type ProgramCreateNestedOneWithoutCurrentWeekInput = {
    create?: XOR<ProgramCreateWithoutCurrentWeekInput, ProgramUncheckedCreateWithoutCurrentWeekInput>
    connectOrCreate?: ProgramCreateOrConnectWithoutCurrentWeekInput
    connect?: ProgramWhereUniqueInput
  }

  export type WorkoutUncheckedCreateNestedManyWithoutWeekInput = {
    create?: XOR<WorkoutCreateWithoutWeekInput, WorkoutUncheckedCreateWithoutWeekInput> | WorkoutCreateWithoutWeekInput[] | WorkoutUncheckedCreateWithoutWeekInput[]
    connectOrCreate?: WorkoutCreateOrConnectWithoutWeekInput | WorkoutCreateOrConnectWithoutWeekInput[]
    createMany?: WorkoutCreateManyWeekInputEnvelope
    connect?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
  }

  export type ProgramUncheckedCreateNestedOneWithoutCurrentWeekInput = {
    create?: XOR<ProgramCreateWithoutCurrentWeekInput, ProgramUncheckedCreateWithoutCurrentWeekInput>
    connectOrCreate?: ProgramCreateOrConnectWithoutCurrentWeekInput
    connect?: ProgramWhereUniqueInput
  }

  export type ProgramUpdateOneRequiredWithoutWeeksNestedInput = {
    create?: XOR<ProgramCreateWithoutWeeksInput, ProgramUncheckedCreateWithoutWeeksInput>
    connectOrCreate?: ProgramCreateOrConnectWithoutWeeksInput
    upsert?: ProgramUpsertWithoutWeeksInput
    connect?: ProgramWhereUniqueInput
    update?: XOR<XOR<ProgramUpdateToOneWithWhereWithoutWeeksInput, ProgramUpdateWithoutWeeksInput>, ProgramUncheckedUpdateWithoutWeeksInput>
  }

  export type WorkoutUpdateManyWithoutWeekNestedInput = {
    create?: XOR<WorkoutCreateWithoutWeekInput, WorkoutUncheckedCreateWithoutWeekInput> | WorkoutCreateWithoutWeekInput[] | WorkoutUncheckedCreateWithoutWeekInput[]
    connectOrCreate?: WorkoutCreateOrConnectWithoutWeekInput | WorkoutCreateOrConnectWithoutWeekInput[]
    upsert?: WorkoutUpsertWithWhereUniqueWithoutWeekInput | WorkoutUpsertWithWhereUniqueWithoutWeekInput[]
    createMany?: WorkoutCreateManyWeekInputEnvelope
    set?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
    disconnect?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
    delete?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
    connect?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
    update?: WorkoutUpdateWithWhereUniqueWithoutWeekInput | WorkoutUpdateWithWhereUniqueWithoutWeekInput[]
    updateMany?: WorkoutUpdateManyWithWhereWithoutWeekInput | WorkoutUpdateManyWithWhereWithoutWeekInput[]
    deleteMany?: WorkoutScalarWhereInput | WorkoutScalarWhereInput[]
  }

  export type ProgramUpdateOneWithoutCurrentWeekNestedInput = {
    create?: XOR<ProgramCreateWithoutCurrentWeekInput, ProgramUncheckedCreateWithoutCurrentWeekInput>
    connectOrCreate?: ProgramCreateOrConnectWithoutCurrentWeekInput
    upsert?: ProgramUpsertWithoutCurrentWeekInput
    disconnect?: ProgramWhereInput | boolean
    delete?: ProgramWhereInput | boolean
    connect?: ProgramWhereUniqueInput
    update?: XOR<XOR<ProgramUpdateToOneWithWhereWithoutCurrentWeekInput, ProgramUpdateWithoutCurrentWeekInput>, ProgramUncheckedUpdateWithoutCurrentWeekInput>
  }

  export type WorkoutUncheckedUpdateManyWithoutWeekNestedInput = {
    create?: XOR<WorkoutCreateWithoutWeekInput, WorkoutUncheckedCreateWithoutWeekInput> | WorkoutCreateWithoutWeekInput[] | WorkoutUncheckedCreateWithoutWeekInput[]
    connectOrCreate?: WorkoutCreateOrConnectWithoutWeekInput | WorkoutCreateOrConnectWithoutWeekInput[]
    upsert?: WorkoutUpsertWithWhereUniqueWithoutWeekInput | WorkoutUpsertWithWhereUniqueWithoutWeekInput[]
    createMany?: WorkoutCreateManyWeekInputEnvelope
    set?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
    disconnect?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
    delete?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
    connect?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
    update?: WorkoutUpdateWithWhereUniqueWithoutWeekInput | WorkoutUpdateWithWhereUniqueWithoutWeekInput[]
    updateMany?: WorkoutUpdateManyWithWhereWithoutWeekInput | WorkoutUpdateManyWithWhereWithoutWeekInput[]
    deleteMany?: WorkoutScalarWhereInput | WorkoutScalarWhereInput[]
  }

  export type ProgramUncheckedUpdateOneWithoutCurrentWeekNestedInput = {
    create?: XOR<ProgramCreateWithoutCurrentWeekInput, ProgramUncheckedCreateWithoutCurrentWeekInput>
    connectOrCreate?: ProgramCreateOrConnectWithoutCurrentWeekInput
    upsert?: ProgramUpsertWithoutCurrentWeekInput
    disconnect?: ProgramWhereInput | boolean
    delete?: ProgramWhereInput | boolean
    connect?: ProgramWhereUniqueInput
    update?: XOR<XOR<ProgramUpdateToOneWithWhereWithoutCurrentWeekInput, ProgramUpdateWithoutCurrentWeekInput>, ProgramUncheckedUpdateWithoutCurrentWeekInput>
  }

  export type WorkoutCreatefocusMuscleGroupsInput = {
    set: string[]
  }

  export type WeekCreateNestedOneWithoutWorkoutsInput = {
    create?: XOR<WeekCreateWithoutWorkoutsInput, WeekUncheckedCreateWithoutWorkoutsInput>
    connectOrCreate?: WeekCreateOrConnectWithoutWorkoutsInput
    connect?: WeekWhereUniqueInput
  }

  export type ExerciseCreateNestedManyWithoutWorkoutInput = {
    create?: XOR<ExerciseCreateWithoutWorkoutInput, ExerciseUncheckedCreateWithoutWorkoutInput> | ExerciseCreateWithoutWorkoutInput[] | ExerciseUncheckedCreateWithoutWorkoutInput[]
    connectOrCreate?: ExerciseCreateOrConnectWithoutWorkoutInput | ExerciseCreateOrConnectWithoutWorkoutInput[]
    createMany?: ExerciseCreateManyWorkoutInputEnvelope
    connect?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
  }

  export type ExerciseCreateNestedOneWithoutCurrentForWorkoutInput = {
    create?: XOR<ExerciseCreateWithoutCurrentForWorkoutInput, ExerciseUncheckedCreateWithoutCurrentForWorkoutInput>
    connectOrCreate?: ExerciseCreateOrConnectWithoutCurrentForWorkoutInput
    connect?: ExerciseWhereUniqueInput
  }

  export type ExerciseUncheckedCreateNestedManyWithoutWorkoutInput = {
    create?: XOR<ExerciseCreateWithoutWorkoutInput, ExerciseUncheckedCreateWithoutWorkoutInput> | ExerciseCreateWithoutWorkoutInput[] | ExerciseUncheckedCreateWithoutWorkoutInput[]
    connectOrCreate?: ExerciseCreateOrConnectWithoutWorkoutInput | ExerciseCreateOrConnectWithoutWorkoutInput[]
    createMany?: ExerciseCreateManyWorkoutInputEnvelope
    connect?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
  }

  export type EnumWorkoutModeFieldUpdateOperationsInput = {
    set?: $Enums.WorkoutMode
  }

  export type WorkoutUpdatefocusMuscleGroupsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type WeekUpdateOneRequiredWithoutWorkoutsNestedInput = {
    create?: XOR<WeekCreateWithoutWorkoutsInput, WeekUncheckedCreateWithoutWorkoutsInput>
    connectOrCreate?: WeekCreateOrConnectWithoutWorkoutsInput
    upsert?: WeekUpsertWithoutWorkoutsInput
    connect?: WeekWhereUniqueInput
    update?: XOR<XOR<WeekUpdateToOneWithWhereWithoutWorkoutsInput, WeekUpdateWithoutWorkoutsInput>, WeekUncheckedUpdateWithoutWorkoutsInput>
  }

  export type ExerciseUpdateManyWithoutWorkoutNestedInput = {
    create?: XOR<ExerciseCreateWithoutWorkoutInput, ExerciseUncheckedCreateWithoutWorkoutInput> | ExerciseCreateWithoutWorkoutInput[] | ExerciseUncheckedCreateWithoutWorkoutInput[]
    connectOrCreate?: ExerciseCreateOrConnectWithoutWorkoutInput | ExerciseCreateOrConnectWithoutWorkoutInput[]
    upsert?: ExerciseUpsertWithWhereUniqueWithoutWorkoutInput | ExerciseUpsertWithWhereUniqueWithoutWorkoutInput[]
    createMany?: ExerciseCreateManyWorkoutInputEnvelope
    set?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    disconnect?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    delete?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    connect?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    update?: ExerciseUpdateWithWhereUniqueWithoutWorkoutInput | ExerciseUpdateWithWhereUniqueWithoutWorkoutInput[]
    updateMany?: ExerciseUpdateManyWithWhereWithoutWorkoutInput | ExerciseUpdateManyWithWhereWithoutWorkoutInput[]
    deleteMany?: ExerciseScalarWhereInput | ExerciseScalarWhereInput[]
  }

  export type ExerciseUpdateOneWithoutCurrentForWorkoutNestedInput = {
    create?: XOR<ExerciseCreateWithoutCurrentForWorkoutInput, ExerciseUncheckedCreateWithoutCurrentForWorkoutInput>
    connectOrCreate?: ExerciseCreateOrConnectWithoutCurrentForWorkoutInput
    upsert?: ExerciseUpsertWithoutCurrentForWorkoutInput
    disconnect?: ExerciseWhereInput | boolean
    delete?: ExerciseWhereInput | boolean
    connect?: ExerciseWhereUniqueInput
    update?: XOR<XOR<ExerciseUpdateToOneWithWhereWithoutCurrentForWorkoutInput, ExerciseUpdateWithoutCurrentForWorkoutInput>, ExerciseUncheckedUpdateWithoutCurrentForWorkoutInput>
  }

  export type ExerciseUncheckedUpdateManyWithoutWorkoutNestedInput = {
    create?: XOR<ExerciseCreateWithoutWorkoutInput, ExerciseUncheckedCreateWithoutWorkoutInput> | ExerciseCreateWithoutWorkoutInput[] | ExerciseUncheckedCreateWithoutWorkoutInput[]
    connectOrCreate?: ExerciseCreateOrConnectWithoutWorkoutInput | ExerciseCreateOrConnectWithoutWorkoutInput[]
    upsert?: ExerciseUpsertWithWhereUniqueWithoutWorkoutInput | ExerciseUpsertWithWhereUniqueWithoutWorkoutInput[]
    createMany?: ExerciseCreateManyWorkoutInputEnvelope
    set?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    disconnect?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    delete?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    connect?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    update?: ExerciseUpdateWithWhereUniqueWithoutWorkoutInput | ExerciseUpdateWithWhereUniqueWithoutWorkoutInput[]
    updateMany?: ExerciseUpdateManyWithWhereWithoutWorkoutInput | ExerciseUpdateManyWithWhereWithoutWorkoutInput[]
    deleteMany?: ExerciseScalarWhereInput | ExerciseScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutExerciseTemplatesInput = {
    create?: XOR<UserCreateWithoutExerciseTemplatesInput, UserUncheckedCreateWithoutExerciseTemplatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutExerciseTemplatesInput
    connect?: UserWhereUniqueInput
  }

  export type MuscleGroupCreateNestedOneWithoutExerciseTemplatesInput = {
    create?: XOR<MuscleGroupCreateWithoutExerciseTemplatesInput, MuscleGroupUncheckedCreateWithoutExerciseTemplatesInput>
    connectOrCreate?: MuscleGroupCreateOrConnectWithoutExerciseTemplatesInput
    connect?: MuscleGroupWhereUniqueInput
  }

  export type ExerciseCreateNestedManyWithoutTemplateInput = {
    create?: XOR<ExerciseCreateWithoutTemplateInput, ExerciseUncheckedCreateWithoutTemplateInput> | ExerciseCreateWithoutTemplateInput[] | ExerciseUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: ExerciseCreateOrConnectWithoutTemplateInput | ExerciseCreateOrConnectWithoutTemplateInput[]
    createMany?: ExerciseCreateManyTemplateInputEnvelope
    connect?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
  }

  export type ExerciseUncheckedCreateNestedManyWithoutTemplateInput = {
    create?: XOR<ExerciseCreateWithoutTemplateInput, ExerciseUncheckedCreateWithoutTemplateInput> | ExerciseCreateWithoutTemplateInput[] | ExerciseUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: ExerciseCreateOrConnectWithoutTemplateInput | ExerciseCreateOrConnectWithoutTemplateInput[]
    createMany?: ExerciseCreateManyTemplateInputEnvelope
    connect?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneWithoutExerciseTemplatesNestedInput = {
    create?: XOR<UserCreateWithoutExerciseTemplatesInput, UserUncheckedCreateWithoutExerciseTemplatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutExerciseTemplatesInput
    upsert?: UserUpsertWithoutExerciseTemplatesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutExerciseTemplatesInput, UserUpdateWithoutExerciseTemplatesInput>, UserUncheckedUpdateWithoutExerciseTemplatesInput>
  }

  export type MuscleGroupUpdateOneWithoutExerciseTemplatesNestedInput = {
    create?: XOR<MuscleGroupCreateWithoutExerciseTemplatesInput, MuscleGroupUncheckedCreateWithoutExerciseTemplatesInput>
    connectOrCreate?: MuscleGroupCreateOrConnectWithoutExerciseTemplatesInput
    upsert?: MuscleGroupUpsertWithoutExerciseTemplatesInput
    disconnect?: MuscleGroupWhereInput | boolean
    delete?: MuscleGroupWhereInput | boolean
    connect?: MuscleGroupWhereUniqueInput
    update?: XOR<XOR<MuscleGroupUpdateToOneWithWhereWithoutExerciseTemplatesInput, MuscleGroupUpdateWithoutExerciseTemplatesInput>, MuscleGroupUncheckedUpdateWithoutExerciseTemplatesInput>
  }

  export type ExerciseUpdateManyWithoutTemplateNestedInput = {
    create?: XOR<ExerciseCreateWithoutTemplateInput, ExerciseUncheckedCreateWithoutTemplateInput> | ExerciseCreateWithoutTemplateInput[] | ExerciseUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: ExerciseCreateOrConnectWithoutTemplateInput | ExerciseCreateOrConnectWithoutTemplateInput[]
    upsert?: ExerciseUpsertWithWhereUniqueWithoutTemplateInput | ExerciseUpsertWithWhereUniqueWithoutTemplateInput[]
    createMany?: ExerciseCreateManyTemplateInputEnvelope
    set?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    disconnect?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    delete?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    connect?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    update?: ExerciseUpdateWithWhereUniqueWithoutTemplateInput | ExerciseUpdateWithWhereUniqueWithoutTemplateInput[]
    updateMany?: ExerciseUpdateManyWithWhereWithoutTemplateInput | ExerciseUpdateManyWithWhereWithoutTemplateInput[]
    deleteMany?: ExerciseScalarWhereInput | ExerciseScalarWhereInput[]
  }

  export type ExerciseUncheckedUpdateManyWithoutTemplateNestedInput = {
    create?: XOR<ExerciseCreateWithoutTemplateInput, ExerciseUncheckedCreateWithoutTemplateInput> | ExerciseCreateWithoutTemplateInput[] | ExerciseUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: ExerciseCreateOrConnectWithoutTemplateInput | ExerciseCreateOrConnectWithoutTemplateInput[]
    upsert?: ExerciseUpsertWithWhereUniqueWithoutTemplateInput | ExerciseUpsertWithWhereUniqueWithoutTemplateInput[]
    createMany?: ExerciseCreateManyTemplateInputEnvelope
    set?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    disconnect?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    delete?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    connect?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    update?: ExerciseUpdateWithWhereUniqueWithoutTemplateInput | ExerciseUpdateWithWhereUniqueWithoutTemplateInput[]
    updateMany?: ExerciseUpdateManyWithWhereWithoutTemplateInput | ExerciseUpdateManyWithWhereWithoutTemplateInput[]
    deleteMany?: ExerciseScalarWhereInput | ExerciseScalarWhereInput[]
  }

  export type WorkoutCreateNestedOneWithoutExercisesInput = {
    create?: XOR<WorkoutCreateWithoutExercisesInput, WorkoutUncheckedCreateWithoutExercisesInput>
    connectOrCreate?: WorkoutCreateOrConnectWithoutExercisesInput
    connect?: WorkoutWhereUniqueInput
  }

  export type ExerciseTemplateCreateNestedOneWithoutExercisesInput = {
    create?: XOR<ExerciseTemplateCreateWithoutExercisesInput, ExerciseTemplateUncheckedCreateWithoutExercisesInput>
    connectOrCreate?: ExerciseTemplateCreateOrConnectWithoutExercisesInput
    connect?: ExerciseTemplateWhereUniqueInput
  }

  export type MuscleGroupCreateNestedOneWithoutExercisesInput = {
    create?: XOR<MuscleGroupCreateWithoutExercisesInput, MuscleGroupUncheckedCreateWithoutExercisesInput>
    connectOrCreate?: MuscleGroupCreateOrConnectWithoutExercisesInput
    connect?: MuscleGroupWhereUniqueInput
  }

  export type SetCreateNestedManyWithoutExerciseInput = {
    create?: XOR<SetCreateWithoutExerciseInput, SetUncheckedCreateWithoutExerciseInput> | SetCreateWithoutExerciseInput[] | SetUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: SetCreateOrConnectWithoutExerciseInput | SetCreateOrConnectWithoutExerciseInput[]
    createMany?: SetCreateManyExerciseInputEnvelope
    connect?: SetWhereUniqueInput | SetWhereUniqueInput[]
  }

  export type SetCreateNestedOneWithoutCurrentForExerciseInput = {
    create?: XOR<SetCreateWithoutCurrentForExerciseInput, SetUncheckedCreateWithoutCurrentForExerciseInput>
    connectOrCreate?: SetCreateOrConnectWithoutCurrentForExerciseInput
    connect?: SetWhereUniqueInput
  }

  export type WorkoutCreateNestedOneWithoutCurrentExerciseInput = {
    create?: XOR<WorkoutCreateWithoutCurrentExerciseInput, WorkoutUncheckedCreateWithoutCurrentExerciseInput>
    connectOrCreate?: WorkoutCreateOrConnectWithoutCurrentExerciseInput
    connect?: WorkoutWhereUniqueInput
  }

  export type SetUncheckedCreateNestedManyWithoutExerciseInput = {
    create?: XOR<SetCreateWithoutExerciseInput, SetUncheckedCreateWithoutExerciseInput> | SetCreateWithoutExerciseInput[] | SetUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: SetCreateOrConnectWithoutExerciseInput | SetCreateOrConnectWithoutExerciseInput[]
    createMany?: SetCreateManyExerciseInputEnvelope
    connect?: SetWhereUniqueInput | SetWhereUniqueInput[]
  }

  export type WorkoutUncheckedCreateNestedOneWithoutCurrentExerciseInput = {
    create?: XOR<WorkoutCreateWithoutCurrentExerciseInput, WorkoutUncheckedCreateWithoutCurrentExerciseInput>
    connectOrCreate?: WorkoutCreateOrConnectWithoutCurrentExerciseInput
    connect?: WorkoutWhereUniqueInput
  }

  export type EnumExerciseTypeFieldUpdateOperationsInput = {
    set?: $Enums.ExerciseType
  }

  export type WorkoutUpdateOneRequiredWithoutExercisesNestedInput = {
    create?: XOR<WorkoutCreateWithoutExercisesInput, WorkoutUncheckedCreateWithoutExercisesInput>
    connectOrCreate?: WorkoutCreateOrConnectWithoutExercisesInput
    upsert?: WorkoutUpsertWithoutExercisesInput
    connect?: WorkoutWhereUniqueInput
    update?: XOR<XOR<WorkoutUpdateToOneWithWhereWithoutExercisesInput, WorkoutUpdateWithoutExercisesInput>, WorkoutUncheckedUpdateWithoutExercisesInput>
  }

  export type ExerciseTemplateUpdateOneWithoutExercisesNestedInput = {
    create?: XOR<ExerciseTemplateCreateWithoutExercisesInput, ExerciseTemplateUncheckedCreateWithoutExercisesInput>
    connectOrCreate?: ExerciseTemplateCreateOrConnectWithoutExercisesInput
    upsert?: ExerciseTemplateUpsertWithoutExercisesInput
    disconnect?: ExerciseTemplateWhereInput | boolean
    delete?: ExerciseTemplateWhereInput | boolean
    connect?: ExerciseTemplateWhereUniqueInput
    update?: XOR<XOR<ExerciseTemplateUpdateToOneWithWhereWithoutExercisesInput, ExerciseTemplateUpdateWithoutExercisesInput>, ExerciseTemplateUncheckedUpdateWithoutExercisesInput>
  }

  export type MuscleGroupUpdateOneWithoutExercisesNestedInput = {
    create?: XOR<MuscleGroupCreateWithoutExercisesInput, MuscleGroupUncheckedCreateWithoutExercisesInput>
    connectOrCreate?: MuscleGroupCreateOrConnectWithoutExercisesInput
    upsert?: MuscleGroupUpsertWithoutExercisesInput
    disconnect?: MuscleGroupWhereInput | boolean
    delete?: MuscleGroupWhereInput | boolean
    connect?: MuscleGroupWhereUniqueInput
    update?: XOR<XOR<MuscleGroupUpdateToOneWithWhereWithoutExercisesInput, MuscleGroupUpdateWithoutExercisesInput>, MuscleGroupUncheckedUpdateWithoutExercisesInput>
  }

  export type SetUpdateManyWithoutExerciseNestedInput = {
    create?: XOR<SetCreateWithoutExerciseInput, SetUncheckedCreateWithoutExerciseInput> | SetCreateWithoutExerciseInput[] | SetUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: SetCreateOrConnectWithoutExerciseInput | SetCreateOrConnectWithoutExerciseInput[]
    upsert?: SetUpsertWithWhereUniqueWithoutExerciseInput | SetUpsertWithWhereUniqueWithoutExerciseInput[]
    createMany?: SetCreateManyExerciseInputEnvelope
    set?: SetWhereUniqueInput | SetWhereUniqueInput[]
    disconnect?: SetWhereUniqueInput | SetWhereUniqueInput[]
    delete?: SetWhereUniqueInput | SetWhereUniqueInput[]
    connect?: SetWhereUniqueInput | SetWhereUniqueInput[]
    update?: SetUpdateWithWhereUniqueWithoutExerciseInput | SetUpdateWithWhereUniqueWithoutExerciseInput[]
    updateMany?: SetUpdateManyWithWhereWithoutExerciseInput | SetUpdateManyWithWhereWithoutExerciseInput[]
    deleteMany?: SetScalarWhereInput | SetScalarWhereInput[]
  }

  export type SetUpdateOneWithoutCurrentForExerciseNestedInput = {
    create?: XOR<SetCreateWithoutCurrentForExerciseInput, SetUncheckedCreateWithoutCurrentForExerciseInput>
    connectOrCreate?: SetCreateOrConnectWithoutCurrentForExerciseInput
    upsert?: SetUpsertWithoutCurrentForExerciseInput
    disconnect?: SetWhereInput | boolean
    delete?: SetWhereInput | boolean
    connect?: SetWhereUniqueInput
    update?: XOR<XOR<SetUpdateToOneWithWhereWithoutCurrentForExerciseInput, SetUpdateWithoutCurrentForExerciseInput>, SetUncheckedUpdateWithoutCurrentForExerciseInput>
  }

  export type WorkoutUpdateOneWithoutCurrentExerciseNestedInput = {
    create?: XOR<WorkoutCreateWithoutCurrentExerciseInput, WorkoutUncheckedCreateWithoutCurrentExerciseInput>
    connectOrCreate?: WorkoutCreateOrConnectWithoutCurrentExerciseInput
    upsert?: WorkoutUpsertWithoutCurrentExerciseInput
    disconnect?: WorkoutWhereInput | boolean
    delete?: WorkoutWhereInput | boolean
    connect?: WorkoutWhereUniqueInput
    update?: XOR<XOR<WorkoutUpdateToOneWithWhereWithoutCurrentExerciseInput, WorkoutUpdateWithoutCurrentExerciseInput>, WorkoutUncheckedUpdateWithoutCurrentExerciseInput>
  }

  export type SetUncheckedUpdateManyWithoutExerciseNestedInput = {
    create?: XOR<SetCreateWithoutExerciseInput, SetUncheckedCreateWithoutExerciseInput> | SetCreateWithoutExerciseInput[] | SetUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: SetCreateOrConnectWithoutExerciseInput | SetCreateOrConnectWithoutExerciseInput[]
    upsert?: SetUpsertWithWhereUniqueWithoutExerciseInput | SetUpsertWithWhereUniqueWithoutExerciseInput[]
    createMany?: SetCreateManyExerciseInputEnvelope
    set?: SetWhereUniqueInput | SetWhereUniqueInput[]
    disconnect?: SetWhereUniqueInput | SetWhereUniqueInput[]
    delete?: SetWhereUniqueInput | SetWhereUniqueInput[]
    connect?: SetWhereUniqueInput | SetWhereUniqueInput[]
    update?: SetUpdateWithWhereUniqueWithoutExerciseInput | SetUpdateWithWhereUniqueWithoutExerciseInput[]
    updateMany?: SetUpdateManyWithWhereWithoutExerciseInput | SetUpdateManyWithWhereWithoutExerciseInput[]
    deleteMany?: SetScalarWhereInput | SetScalarWhereInput[]
  }

  export type WorkoutUncheckedUpdateOneWithoutCurrentExerciseNestedInput = {
    create?: XOR<WorkoutCreateWithoutCurrentExerciseInput, WorkoutUncheckedCreateWithoutCurrentExerciseInput>
    connectOrCreate?: WorkoutCreateOrConnectWithoutCurrentExerciseInput
    upsert?: WorkoutUpsertWithoutCurrentExerciseInput
    disconnect?: WorkoutWhereInput | boolean
    delete?: WorkoutWhereInput | boolean
    connect?: WorkoutWhereUniqueInput
    update?: XOR<XOR<WorkoutUpdateToOneWithWhereWithoutCurrentExerciseInput, WorkoutUpdateWithoutCurrentExerciseInput>, WorkoutUncheckedUpdateWithoutCurrentExerciseInput>
  }

  export type ExerciseCreateNestedOneWithoutSetsInput = {
    create?: XOR<ExerciseCreateWithoutSetsInput, ExerciseUncheckedCreateWithoutSetsInput>
    connectOrCreate?: ExerciseCreateOrConnectWithoutSetsInput
    connect?: ExerciseWhereUniqueInput
  }

  export type ExerciseCreateNestedOneWithoutCurrentSetInput = {
    create?: XOR<ExerciseCreateWithoutCurrentSetInput, ExerciseUncheckedCreateWithoutCurrentSetInput>
    connectOrCreate?: ExerciseCreateOrConnectWithoutCurrentSetInput
    connect?: ExerciseWhereUniqueInput
  }

  export type ExerciseUncheckedCreateNestedOneWithoutCurrentSetInput = {
    create?: XOR<ExerciseCreateWithoutCurrentSetInput, ExerciseUncheckedCreateWithoutCurrentSetInput>
    connectOrCreate?: ExerciseCreateOrConnectWithoutCurrentSetInput
    connect?: ExerciseWhereUniqueInput
  }

  export type EnumSetTypeFieldUpdateOperationsInput = {
    set?: $Enums.SetType
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ExerciseUpdateOneRequiredWithoutSetsNestedInput = {
    create?: XOR<ExerciseCreateWithoutSetsInput, ExerciseUncheckedCreateWithoutSetsInput>
    connectOrCreate?: ExerciseCreateOrConnectWithoutSetsInput
    upsert?: ExerciseUpsertWithoutSetsInput
    connect?: ExerciseWhereUniqueInput
    update?: XOR<XOR<ExerciseUpdateToOneWithWhereWithoutSetsInput, ExerciseUpdateWithoutSetsInput>, ExerciseUncheckedUpdateWithoutSetsInput>
  }

  export type ExerciseUpdateOneWithoutCurrentSetNestedInput = {
    create?: XOR<ExerciseCreateWithoutCurrentSetInput, ExerciseUncheckedCreateWithoutCurrentSetInput>
    connectOrCreate?: ExerciseCreateOrConnectWithoutCurrentSetInput
    upsert?: ExerciseUpsertWithoutCurrentSetInput
    disconnect?: ExerciseWhereInput | boolean
    delete?: ExerciseWhereInput | boolean
    connect?: ExerciseWhereUniqueInput
    update?: XOR<XOR<ExerciseUpdateToOneWithWhereWithoutCurrentSetInput, ExerciseUpdateWithoutCurrentSetInput>, ExerciseUncheckedUpdateWithoutCurrentSetInput>
  }

  export type ExerciseUncheckedUpdateOneWithoutCurrentSetNestedInput = {
    create?: XOR<ExerciseCreateWithoutCurrentSetInput, ExerciseUncheckedCreateWithoutCurrentSetInput>
    connectOrCreate?: ExerciseCreateOrConnectWithoutCurrentSetInput
    upsert?: ExerciseUpsertWithoutCurrentSetInput
    disconnect?: ExerciseWhereInput | boolean
    delete?: ExerciseWhereInput | boolean
    connect?: ExerciseWhereUniqueInput
    update?: XOR<XOR<ExerciseUpdateToOneWithWhereWithoutCurrentSetInput, ExerciseUpdateWithoutCurrentSetInput>, ExerciseUncheckedUpdateWithoutCurrentSetInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumProgramGoalNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ProgramGoal | EnumProgramGoalFieldRefInput<$PrismaModel> | null
    in?: $Enums.ProgramGoal[] | ListEnumProgramGoalFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ProgramGoal[] | ListEnumProgramGoalFieldRefInput<$PrismaModel> | null
    not?: NestedEnumProgramGoalNullableFilter<$PrismaModel> | $Enums.ProgramGoal | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumProgramGoalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProgramGoal | EnumProgramGoalFieldRefInput<$PrismaModel> | null
    in?: $Enums.ProgramGoal[] | ListEnumProgramGoalFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ProgramGoal[] | ListEnumProgramGoalFieldRefInput<$PrismaModel> | null
    not?: NestedEnumProgramGoalNullableWithAggregatesFilter<$PrismaModel> | $Enums.ProgramGoal | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumProgramGoalNullableFilter<$PrismaModel>
    _max?: NestedEnumProgramGoalNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumWorkoutModeFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkoutMode | EnumWorkoutModeFieldRefInput<$PrismaModel>
    in?: $Enums.WorkoutMode[] | ListEnumWorkoutModeFieldRefInput<$PrismaModel>
    notIn?: $Enums.WorkoutMode[] | ListEnumWorkoutModeFieldRefInput<$PrismaModel>
    not?: NestedEnumWorkoutModeFilter<$PrismaModel> | $Enums.WorkoutMode
  }

  export type NestedEnumWorkoutModeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkoutMode | EnumWorkoutModeFieldRefInput<$PrismaModel>
    in?: $Enums.WorkoutMode[] | ListEnumWorkoutModeFieldRefInput<$PrismaModel>
    notIn?: $Enums.WorkoutMode[] | ListEnumWorkoutModeFieldRefInput<$PrismaModel>
    not?: NestedEnumWorkoutModeWithAggregatesFilter<$PrismaModel> | $Enums.WorkoutMode
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWorkoutModeFilter<$PrismaModel>
    _max?: NestedEnumWorkoutModeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumExerciseTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ExerciseType | EnumExerciseTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ExerciseType[] | ListEnumExerciseTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExerciseType[] | ListEnumExerciseTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumExerciseTypeFilter<$PrismaModel> | $Enums.ExerciseType
  }

  export type NestedEnumExerciseTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExerciseType | EnumExerciseTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ExerciseType[] | ListEnumExerciseTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExerciseType[] | ListEnumExerciseTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumExerciseTypeWithAggregatesFilter<$PrismaModel> | $Enums.ExerciseType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumExerciseTypeFilter<$PrismaModel>
    _max?: NestedEnumExerciseTypeFilter<$PrismaModel>
  }

  export type NestedEnumSetTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SetType | EnumSetTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SetType[] | ListEnumSetTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SetType[] | ListEnumSetTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSetTypeFilter<$PrismaModel> | $Enums.SetType
  }

  export type NestedEnumSetTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SetType | EnumSetTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SetType[] | ListEnumSetTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SetType[] | ListEnumSetTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSetTypeWithAggregatesFilter<$PrismaModel> | $Enums.SetType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSetTypeFilter<$PrismaModel>
    _max?: NestedEnumSetTypeFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type ProgramCreateWithoutUserInput = {
    id?: string
    name: string
    goal?: $Enums.ProgramGoal | null
    length: number
    days: number
    completed?: boolean
    aiPlanJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    weeks?: WeekCreateNestedManyWithoutProgramInput
    currentWeek?: WeekCreateNestedOneWithoutCurrentForProgramInput
  }

  export type ProgramUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    goal?: $Enums.ProgramGoal | null
    length: number
    days: number
    currentWeekId?: string | null
    completed?: boolean
    aiPlanJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    weeks?: WeekUncheckedCreateNestedManyWithoutProgramInput
  }

  export type ProgramCreateOrConnectWithoutUserInput = {
    where: ProgramWhereUniqueInput
    create: XOR<ProgramCreateWithoutUserInput, ProgramUncheckedCreateWithoutUserInput>
  }

  export type ProgramCreateManyUserInputEnvelope = {
    data: ProgramCreateManyUserInput | ProgramCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ExerciseTemplateCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    defaultSets?: number | null
    defaultRepsLower?: number | null
    defaultRepsUpper?: number | null
    defaultRir?: number | null
    defaultDetails?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    muscleGroup?: MuscleGroupCreateNestedOneWithoutExerciseTemplatesInput
    exercises?: ExerciseCreateNestedManyWithoutTemplateInput
  }

  export type ExerciseTemplateUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    muscleGroupId?: string | null
    defaultSets?: number | null
    defaultRepsLower?: number | null
    defaultRepsUpper?: number | null
    defaultRir?: number | null
    defaultDetails?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    exercises?: ExerciseUncheckedCreateNestedManyWithoutTemplateInput
  }

  export type ExerciseTemplateCreateOrConnectWithoutUserInput = {
    where: ExerciseTemplateWhereUniqueInput
    create: XOR<ExerciseTemplateCreateWithoutUserInput, ExerciseTemplateUncheckedCreateWithoutUserInput>
  }

  export type ExerciseTemplateCreateManyUserInputEnvelope = {
    data: ExerciseTemplateCreateManyUserInput | ExerciseTemplateCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProgramTemplateCreateWithoutUserInput = {
    id?: string
    name: string
    goal?: $Enums.ProgramGoal | null
    length: number
    days: number
    structureJson?: NullableJsonNullValueInput | InputJsonValue
    aiPlanJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProgramTemplateUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    goal?: $Enums.ProgramGoal | null
    length: number
    days: number
    structureJson?: NullableJsonNullValueInput | InputJsonValue
    aiPlanJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProgramTemplateCreateOrConnectWithoutUserInput = {
    where: ProgramTemplateWhereUniqueInput
    create: XOR<ProgramTemplateCreateWithoutUserInput, ProgramTemplateUncheckedCreateWithoutUserInput>
  }

  export type ProgramTemplateCreateManyUserInputEnvelope = {
    data: ProgramTemplateCreateManyUserInput | ProgramTemplateCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProgramUpsertWithWhereUniqueWithoutUserInput = {
    where: ProgramWhereUniqueInput
    update: XOR<ProgramUpdateWithoutUserInput, ProgramUncheckedUpdateWithoutUserInput>
    create: XOR<ProgramCreateWithoutUserInput, ProgramUncheckedCreateWithoutUserInput>
  }

  export type ProgramUpdateWithWhereUniqueWithoutUserInput = {
    where: ProgramWhereUniqueInput
    data: XOR<ProgramUpdateWithoutUserInput, ProgramUncheckedUpdateWithoutUserInput>
  }

  export type ProgramUpdateManyWithWhereWithoutUserInput = {
    where: ProgramScalarWhereInput
    data: XOR<ProgramUpdateManyMutationInput, ProgramUncheckedUpdateManyWithoutUserInput>
  }

  export type ProgramScalarWhereInput = {
    AND?: ProgramScalarWhereInput | ProgramScalarWhereInput[]
    OR?: ProgramScalarWhereInput[]
    NOT?: ProgramScalarWhereInput | ProgramScalarWhereInput[]
    id?: StringFilter<"Program"> | string
    userId?: StringNullableFilter<"Program"> | string | null
    name?: StringFilter<"Program"> | string
    goal?: EnumProgramGoalNullableFilter<"Program"> | $Enums.ProgramGoal | null
    length?: IntFilter<"Program"> | number
    days?: IntFilter<"Program"> | number
    currentWeekId?: StringNullableFilter<"Program"> | string | null
    completed?: BoolFilter<"Program"> | boolean
    aiPlanJson?: JsonNullableFilter<"Program">
    createdAt?: DateTimeFilter<"Program"> | Date | string
    updatedAt?: DateTimeFilter<"Program"> | Date | string
  }

  export type ExerciseTemplateUpsertWithWhereUniqueWithoutUserInput = {
    where: ExerciseTemplateWhereUniqueInput
    update: XOR<ExerciseTemplateUpdateWithoutUserInput, ExerciseTemplateUncheckedUpdateWithoutUserInput>
    create: XOR<ExerciseTemplateCreateWithoutUserInput, ExerciseTemplateUncheckedCreateWithoutUserInput>
  }

  export type ExerciseTemplateUpdateWithWhereUniqueWithoutUserInput = {
    where: ExerciseTemplateWhereUniqueInput
    data: XOR<ExerciseTemplateUpdateWithoutUserInput, ExerciseTemplateUncheckedUpdateWithoutUserInput>
  }

  export type ExerciseTemplateUpdateManyWithWhereWithoutUserInput = {
    where: ExerciseTemplateScalarWhereInput
    data: XOR<ExerciseTemplateUpdateManyMutationInput, ExerciseTemplateUncheckedUpdateManyWithoutUserInput>
  }

  export type ExerciseTemplateScalarWhereInput = {
    AND?: ExerciseTemplateScalarWhereInput | ExerciseTemplateScalarWhereInput[]
    OR?: ExerciseTemplateScalarWhereInput[]
    NOT?: ExerciseTemplateScalarWhereInput | ExerciseTemplateScalarWhereInput[]
    id?: StringFilter<"ExerciseTemplate"> | string
    userId?: StringNullableFilter<"ExerciseTemplate"> | string | null
    name?: StringFilter<"ExerciseTemplate"> | string
    description?: StringNullableFilter<"ExerciseTemplate"> | string | null
    muscleGroupId?: StringNullableFilter<"ExerciseTemplate"> | string | null
    defaultSets?: IntNullableFilter<"ExerciseTemplate"> | number | null
    defaultRepsLower?: IntNullableFilter<"ExerciseTemplate"> | number | null
    defaultRepsUpper?: IntNullableFilter<"ExerciseTemplate"> | number | null
    defaultRir?: IntNullableFilter<"ExerciseTemplate"> | number | null
    defaultDetails?: JsonNullableFilter<"ExerciseTemplate">
    createdAt?: DateTimeFilter<"ExerciseTemplate"> | Date | string
    updatedAt?: DateTimeFilter<"ExerciseTemplate"> | Date | string
  }

  export type ProgramTemplateUpsertWithWhereUniqueWithoutUserInput = {
    where: ProgramTemplateWhereUniqueInput
    update: XOR<ProgramTemplateUpdateWithoutUserInput, ProgramTemplateUncheckedUpdateWithoutUserInput>
    create: XOR<ProgramTemplateCreateWithoutUserInput, ProgramTemplateUncheckedCreateWithoutUserInput>
  }

  export type ProgramTemplateUpdateWithWhereUniqueWithoutUserInput = {
    where: ProgramTemplateWhereUniqueInput
    data: XOR<ProgramTemplateUpdateWithoutUserInput, ProgramTemplateUncheckedUpdateWithoutUserInput>
  }

  export type ProgramTemplateUpdateManyWithWhereWithoutUserInput = {
    where: ProgramTemplateScalarWhereInput
    data: XOR<ProgramTemplateUpdateManyMutationInput, ProgramTemplateUncheckedUpdateManyWithoutUserInput>
  }

  export type ProgramTemplateScalarWhereInput = {
    AND?: ProgramTemplateScalarWhereInput | ProgramTemplateScalarWhereInput[]
    OR?: ProgramTemplateScalarWhereInput[]
    NOT?: ProgramTemplateScalarWhereInput | ProgramTemplateScalarWhereInput[]
    id?: StringFilter<"ProgramTemplate"> | string
    userId?: StringNullableFilter<"ProgramTemplate"> | string | null
    name?: StringFilter<"ProgramTemplate"> | string
    goal?: EnumProgramGoalNullableFilter<"ProgramTemplate"> | $Enums.ProgramGoal | null
    length?: IntFilter<"ProgramTemplate"> | number
    days?: IntFilter<"ProgramTemplate"> | number
    structureJson?: JsonNullableFilter<"ProgramTemplate">
    aiPlanJson?: JsonNullableFilter<"ProgramTemplate">
    createdAt?: DateTimeFilter<"ProgramTemplate"> | Date | string
    updatedAt?: DateTimeFilter<"ProgramTemplate"> | Date | string
  }

  export type ExerciseCreateWithoutMuscleGroupInput = {
    id?: string
    order: number
    exerciseType?: $Enums.ExerciseType
    details?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    completed?: boolean
    workout: WorkoutCreateNestedOneWithoutExercisesInput
    template?: ExerciseTemplateCreateNestedOneWithoutExercisesInput
    sets?: SetCreateNestedManyWithoutExerciseInput
    currentSet?: SetCreateNestedOneWithoutCurrentForExerciseInput
    currentForWorkout?: WorkoutCreateNestedOneWithoutCurrentExerciseInput
  }

  export type ExerciseUncheckedCreateWithoutMuscleGroupInput = {
    id?: string
    workoutId: string
    order: number
    exerciseType?: $Enums.ExerciseType
    exerciseTemplateId?: string | null
    details?: string | null
    currentSetId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    completed?: boolean
    sets?: SetUncheckedCreateNestedManyWithoutExerciseInput
    currentForWorkout?: WorkoutUncheckedCreateNestedOneWithoutCurrentExerciseInput
  }

  export type ExerciseCreateOrConnectWithoutMuscleGroupInput = {
    where: ExerciseWhereUniqueInput
    create: XOR<ExerciseCreateWithoutMuscleGroupInput, ExerciseUncheckedCreateWithoutMuscleGroupInput>
  }

  export type ExerciseCreateManyMuscleGroupInputEnvelope = {
    data: ExerciseCreateManyMuscleGroupInput | ExerciseCreateManyMuscleGroupInput[]
    skipDuplicates?: boolean
  }

  export type ExerciseTemplateCreateWithoutMuscleGroupInput = {
    id?: string
    name: string
    description?: string | null
    defaultSets?: number | null
    defaultRepsLower?: number | null
    defaultRepsUpper?: number | null
    defaultRir?: number | null
    defaultDetails?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutExerciseTemplatesInput
    exercises?: ExerciseCreateNestedManyWithoutTemplateInput
  }

  export type ExerciseTemplateUncheckedCreateWithoutMuscleGroupInput = {
    id?: string
    userId?: string | null
    name: string
    description?: string | null
    defaultSets?: number | null
    defaultRepsLower?: number | null
    defaultRepsUpper?: number | null
    defaultRir?: number | null
    defaultDetails?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    exercises?: ExerciseUncheckedCreateNestedManyWithoutTemplateInput
  }

  export type ExerciseTemplateCreateOrConnectWithoutMuscleGroupInput = {
    where: ExerciseTemplateWhereUniqueInput
    create: XOR<ExerciseTemplateCreateWithoutMuscleGroupInput, ExerciseTemplateUncheckedCreateWithoutMuscleGroupInput>
  }

  export type ExerciseTemplateCreateManyMuscleGroupInputEnvelope = {
    data: ExerciseTemplateCreateManyMuscleGroupInput | ExerciseTemplateCreateManyMuscleGroupInput[]
    skipDuplicates?: boolean
  }

  export type ExerciseUpsertWithWhereUniqueWithoutMuscleGroupInput = {
    where: ExerciseWhereUniqueInput
    update: XOR<ExerciseUpdateWithoutMuscleGroupInput, ExerciseUncheckedUpdateWithoutMuscleGroupInput>
    create: XOR<ExerciseCreateWithoutMuscleGroupInput, ExerciseUncheckedCreateWithoutMuscleGroupInput>
  }

  export type ExerciseUpdateWithWhereUniqueWithoutMuscleGroupInput = {
    where: ExerciseWhereUniqueInput
    data: XOR<ExerciseUpdateWithoutMuscleGroupInput, ExerciseUncheckedUpdateWithoutMuscleGroupInput>
  }

  export type ExerciseUpdateManyWithWhereWithoutMuscleGroupInput = {
    where: ExerciseScalarWhereInput
    data: XOR<ExerciseUpdateManyMutationInput, ExerciseUncheckedUpdateManyWithoutMuscleGroupInput>
  }

  export type ExerciseScalarWhereInput = {
    AND?: ExerciseScalarWhereInput | ExerciseScalarWhereInput[]
    OR?: ExerciseScalarWhereInput[]
    NOT?: ExerciseScalarWhereInput | ExerciseScalarWhereInput[]
    id?: StringFilter<"Exercise"> | string
    workoutId?: StringFilter<"Exercise"> | string
    order?: IntFilter<"Exercise"> | number
    exerciseType?: EnumExerciseTypeFilter<"Exercise"> | $Enums.ExerciseType
    exerciseTemplateId?: StringNullableFilter<"Exercise"> | string | null
    muscleGroupId?: StringNullableFilter<"Exercise"> | string | null
    details?: StringNullableFilter<"Exercise"> | string | null
    currentSetId?: StringNullableFilter<"Exercise"> | string | null
    createdAt?: DateTimeFilter<"Exercise"> | Date | string
    updatedAt?: DateTimeFilter<"Exercise"> | Date | string
    completed?: BoolFilter<"Exercise"> | boolean
  }

  export type ExerciseTemplateUpsertWithWhereUniqueWithoutMuscleGroupInput = {
    where: ExerciseTemplateWhereUniqueInput
    update: XOR<ExerciseTemplateUpdateWithoutMuscleGroupInput, ExerciseTemplateUncheckedUpdateWithoutMuscleGroupInput>
    create: XOR<ExerciseTemplateCreateWithoutMuscleGroupInput, ExerciseTemplateUncheckedCreateWithoutMuscleGroupInput>
  }

  export type ExerciseTemplateUpdateWithWhereUniqueWithoutMuscleGroupInput = {
    where: ExerciseTemplateWhereUniqueInput
    data: XOR<ExerciseTemplateUpdateWithoutMuscleGroupInput, ExerciseTemplateUncheckedUpdateWithoutMuscleGroupInput>
  }

  export type ExerciseTemplateUpdateManyWithWhereWithoutMuscleGroupInput = {
    where: ExerciseTemplateScalarWhereInput
    data: XOR<ExerciseTemplateUpdateManyMutationInput, ExerciseTemplateUncheckedUpdateManyWithoutMuscleGroupInput>
  }

  export type UserCreateWithoutProgramsInput = {
    id?: string
    clerkId: string
    email: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    exerciseTemplates?: ExerciseTemplateCreateNestedManyWithoutUserInput
    programTemplates?: ProgramTemplateCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProgramsInput = {
    id?: string
    clerkId: string
    email: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    exerciseTemplates?: ExerciseTemplateUncheckedCreateNestedManyWithoutUserInput
    programTemplates?: ProgramTemplateUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProgramsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProgramsInput, UserUncheckedCreateWithoutProgramsInput>
  }

  export type WeekCreateWithoutProgramInput = {
    id?: string
    weekNumber: number
    createdAt?: Date | string
    updatedAt?: Date | string
    workouts?: WorkoutCreateNestedManyWithoutWeekInput
    currentForProgram?: ProgramCreateNestedOneWithoutCurrentWeekInput
  }

  export type WeekUncheckedCreateWithoutProgramInput = {
    id?: string
    weekNumber: number
    createdAt?: Date | string
    updatedAt?: Date | string
    workouts?: WorkoutUncheckedCreateNestedManyWithoutWeekInput
    currentForProgram?: ProgramUncheckedCreateNestedOneWithoutCurrentWeekInput
  }

  export type WeekCreateOrConnectWithoutProgramInput = {
    where: WeekWhereUniqueInput
    create: XOR<WeekCreateWithoutProgramInput, WeekUncheckedCreateWithoutProgramInput>
  }

  export type WeekCreateManyProgramInputEnvelope = {
    data: WeekCreateManyProgramInput | WeekCreateManyProgramInput[]
    skipDuplicates?: boolean
  }

  export type WeekCreateWithoutCurrentForProgramInput = {
    id?: string
    weekNumber: number
    createdAt?: Date | string
    updatedAt?: Date | string
    program: ProgramCreateNestedOneWithoutWeeksInput
    workouts?: WorkoutCreateNestedManyWithoutWeekInput
  }

  export type WeekUncheckedCreateWithoutCurrentForProgramInput = {
    id?: string
    programId: string
    weekNumber: number
    createdAt?: Date | string
    updatedAt?: Date | string
    workouts?: WorkoutUncheckedCreateNestedManyWithoutWeekInput
  }

  export type WeekCreateOrConnectWithoutCurrentForProgramInput = {
    where: WeekWhereUniqueInput
    create: XOR<WeekCreateWithoutCurrentForProgramInput, WeekUncheckedCreateWithoutCurrentForProgramInput>
  }

  export type UserUpsertWithoutProgramsInput = {
    update: XOR<UserUpdateWithoutProgramsInput, UserUncheckedUpdateWithoutProgramsInput>
    create: XOR<UserCreateWithoutProgramsInput, UserUncheckedCreateWithoutProgramsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProgramsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProgramsInput, UserUncheckedUpdateWithoutProgramsInput>
  }

  export type UserUpdateWithoutProgramsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exerciseTemplates?: ExerciseTemplateUpdateManyWithoutUserNestedInput
    programTemplates?: ProgramTemplateUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProgramsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exerciseTemplates?: ExerciseTemplateUncheckedUpdateManyWithoutUserNestedInput
    programTemplates?: ProgramTemplateUncheckedUpdateManyWithoutUserNestedInput
  }

  export type WeekUpsertWithWhereUniqueWithoutProgramInput = {
    where: WeekWhereUniqueInput
    update: XOR<WeekUpdateWithoutProgramInput, WeekUncheckedUpdateWithoutProgramInput>
    create: XOR<WeekCreateWithoutProgramInput, WeekUncheckedCreateWithoutProgramInput>
  }

  export type WeekUpdateWithWhereUniqueWithoutProgramInput = {
    where: WeekWhereUniqueInput
    data: XOR<WeekUpdateWithoutProgramInput, WeekUncheckedUpdateWithoutProgramInput>
  }

  export type WeekUpdateManyWithWhereWithoutProgramInput = {
    where: WeekScalarWhereInput
    data: XOR<WeekUpdateManyMutationInput, WeekUncheckedUpdateManyWithoutProgramInput>
  }

  export type WeekScalarWhereInput = {
    AND?: WeekScalarWhereInput | WeekScalarWhereInput[]
    OR?: WeekScalarWhereInput[]
    NOT?: WeekScalarWhereInput | WeekScalarWhereInput[]
    id?: StringFilter<"Week"> | string
    programId?: StringFilter<"Week"> | string
    weekNumber?: IntFilter<"Week"> | number
    createdAt?: DateTimeFilter<"Week"> | Date | string
    updatedAt?: DateTimeFilter<"Week"> | Date | string
  }

  export type WeekUpsertWithoutCurrentForProgramInput = {
    update: XOR<WeekUpdateWithoutCurrentForProgramInput, WeekUncheckedUpdateWithoutCurrentForProgramInput>
    create: XOR<WeekCreateWithoutCurrentForProgramInput, WeekUncheckedCreateWithoutCurrentForProgramInput>
    where?: WeekWhereInput
  }

  export type WeekUpdateToOneWithWhereWithoutCurrentForProgramInput = {
    where?: WeekWhereInput
    data: XOR<WeekUpdateWithoutCurrentForProgramInput, WeekUncheckedUpdateWithoutCurrentForProgramInput>
  }

  export type WeekUpdateWithoutCurrentForProgramInput = {
    id?: StringFieldUpdateOperationsInput | string
    weekNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    program?: ProgramUpdateOneRequiredWithoutWeeksNestedInput
    workouts?: WorkoutUpdateManyWithoutWeekNestedInput
  }

  export type WeekUncheckedUpdateWithoutCurrentForProgramInput = {
    id?: StringFieldUpdateOperationsInput | string
    programId?: StringFieldUpdateOperationsInput | string
    weekNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workouts?: WorkoutUncheckedUpdateManyWithoutWeekNestedInput
  }

  export type UserCreateWithoutProgramTemplatesInput = {
    id?: string
    clerkId: string
    email: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    programs?: ProgramCreateNestedManyWithoutUserInput
    exerciseTemplates?: ExerciseTemplateCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProgramTemplatesInput = {
    id?: string
    clerkId: string
    email: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    programs?: ProgramUncheckedCreateNestedManyWithoutUserInput
    exerciseTemplates?: ExerciseTemplateUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProgramTemplatesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProgramTemplatesInput, UserUncheckedCreateWithoutProgramTemplatesInput>
  }

  export type UserUpsertWithoutProgramTemplatesInput = {
    update: XOR<UserUpdateWithoutProgramTemplatesInput, UserUncheckedUpdateWithoutProgramTemplatesInput>
    create: XOR<UserCreateWithoutProgramTemplatesInput, UserUncheckedCreateWithoutProgramTemplatesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProgramTemplatesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProgramTemplatesInput, UserUncheckedUpdateWithoutProgramTemplatesInput>
  }

  export type UserUpdateWithoutProgramTemplatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    programs?: ProgramUpdateManyWithoutUserNestedInput
    exerciseTemplates?: ExerciseTemplateUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProgramTemplatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    programs?: ProgramUncheckedUpdateManyWithoutUserNestedInput
    exerciseTemplates?: ExerciseTemplateUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProgramCreateWithoutWeeksInput = {
    id?: string
    name: string
    goal?: $Enums.ProgramGoal | null
    length: number
    days: number
    completed?: boolean
    aiPlanJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutProgramsInput
    currentWeek?: WeekCreateNestedOneWithoutCurrentForProgramInput
  }

  export type ProgramUncheckedCreateWithoutWeeksInput = {
    id?: string
    userId?: string | null
    name: string
    goal?: $Enums.ProgramGoal | null
    length: number
    days: number
    currentWeekId?: string | null
    completed?: boolean
    aiPlanJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProgramCreateOrConnectWithoutWeeksInput = {
    where: ProgramWhereUniqueInput
    create: XOR<ProgramCreateWithoutWeeksInput, ProgramUncheckedCreateWithoutWeeksInput>
  }

  export type WorkoutCreateWithoutWeekInput = {
    id?: string
    dayNumber: number
    name: string
    mode?: $Enums.WorkoutMode
    focusMuscleGroups?: WorkoutCreatefocusMuscleGroupsInput | string[]
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    completed?: boolean
    exercises?: ExerciseCreateNestedManyWithoutWorkoutInput
    currentExercise?: ExerciseCreateNestedOneWithoutCurrentForWorkoutInput
  }

  export type WorkoutUncheckedCreateWithoutWeekInput = {
    id?: string
    dayNumber: number
    name: string
    mode?: $Enums.WorkoutMode
    focusMuscleGroups?: WorkoutCreatefocusMuscleGroupsInput | string[]
    notes?: string | null
    currentExerciseId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    completed?: boolean
    exercises?: ExerciseUncheckedCreateNestedManyWithoutWorkoutInput
  }

  export type WorkoutCreateOrConnectWithoutWeekInput = {
    where: WorkoutWhereUniqueInput
    create: XOR<WorkoutCreateWithoutWeekInput, WorkoutUncheckedCreateWithoutWeekInput>
  }

  export type WorkoutCreateManyWeekInputEnvelope = {
    data: WorkoutCreateManyWeekInput | WorkoutCreateManyWeekInput[]
    skipDuplicates?: boolean
  }

  export type ProgramCreateWithoutCurrentWeekInput = {
    id?: string
    name: string
    goal?: $Enums.ProgramGoal | null
    length: number
    days: number
    completed?: boolean
    aiPlanJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutProgramsInput
    weeks?: WeekCreateNestedManyWithoutProgramInput
  }

  export type ProgramUncheckedCreateWithoutCurrentWeekInput = {
    id?: string
    userId?: string | null
    name: string
    goal?: $Enums.ProgramGoal | null
    length: number
    days: number
    completed?: boolean
    aiPlanJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    weeks?: WeekUncheckedCreateNestedManyWithoutProgramInput
  }

  export type ProgramCreateOrConnectWithoutCurrentWeekInput = {
    where: ProgramWhereUniqueInput
    create: XOR<ProgramCreateWithoutCurrentWeekInput, ProgramUncheckedCreateWithoutCurrentWeekInput>
  }

  export type ProgramUpsertWithoutWeeksInput = {
    update: XOR<ProgramUpdateWithoutWeeksInput, ProgramUncheckedUpdateWithoutWeeksInput>
    create: XOR<ProgramCreateWithoutWeeksInput, ProgramUncheckedCreateWithoutWeeksInput>
    where?: ProgramWhereInput
  }

  export type ProgramUpdateToOneWithWhereWithoutWeeksInput = {
    where?: ProgramWhereInput
    data: XOR<ProgramUpdateWithoutWeeksInput, ProgramUncheckedUpdateWithoutWeeksInput>
  }

  export type ProgramUpdateWithoutWeeksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    goal?: NullableEnumProgramGoalFieldUpdateOperationsInput | $Enums.ProgramGoal | null
    length?: IntFieldUpdateOperationsInput | number
    days?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    aiPlanJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutProgramsNestedInput
    currentWeek?: WeekUpdateOneWithoutCurrentForProgramNestedInput
  }

  export type ProgramUncheckedUpdateWithoutWeeksInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    goal?: NullableEnumProgramGoalFieldUpdateOperationsInput | $Enums.ProgramGoal | null
    length?: IntFieldUpdateOperationsInput | number
    days?: IntFieldUpdateOperationsInput | number
    currentWeekId?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    aiPlanJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkoutUpsertWithWhereUniqueWithoutWeekInput = {
    where: WorkoutWhereUniqueInput
    update: XOR<WorkoutUpdateWithoutWeekInput, WorkoutUncheckedUpdateWithoutWeekInput>
    create: XOR<WorkoutCreateWithoutWeekInput, WorkoutUncheckedCreateWithoutWeekInput>
  }

  export type WorkoutUpdateWithWhereUniqueWithoutWeekInput = {
    where: WorkoutWhereUniqueInput
    data: XOR<WorkoutUpdateWithoutWeekInput, WorkoutUncheckedUpdateWithoutWeekInput>
  }

  export type WorkoutUpdateManyWithWhereWithoutWeekInput = {
    where: WorkoutScalarWhereInput
    data: XOR<WorkoutUpdateManyMutationInput, WorkoutUncheckedUpdateManyWithoutWeekInput>
  }

  export type WorkoutScalarWhereInput = {
    AND?: WorkoutScalarWhereInput | WorkoutScalarWhereInput[]
    OR?: WorkoutScalarWhereInput[]
    NOT?: WorkoutScalarWhereInput | WorkoutScalarWhereInput[]
    id?: StringFilter<"Workout"> | string
    weekId?: StringFilter<"Workout"> | string
    dayNumber?: IntFilter<"Workout"> | number
    name?: StringFilter<"Workout"> | string
    mode?: EnumWorkoutModeFilter<"Workout"> | $Enums.WorkoutMode
    focusMuscleGroups?: StringNullableListFilter<"Workout">
    notes?: StringNullableFilter<"Workout"> | string | null
    currentExerciseId?: StringNullableFilter<"Workout"> | string | null
    createdAt?: DateTimeFilter<"Workout"> | Date | string
    updatedAt?: DateTimeFilter<"Workout"> | Date | string
    completed?: BoolFilter<"Workout"> | boolean
  }

  export type ProgramUpsertWithoutCurrentWeekInput = {
    update: XOR<ProgramUpdateWithoutCurrentWeekInput, ProgramUncheckedUpdateWithoutCurrentWeekInput>
    create: XOR<ProgramCreateWithoutCurrentWeekInput, ProgramUncheckedCreateWithoutCurrentWeekInput>
    where?: ProgramWhereInput
  }

  export type ProgramUpdateToOneWithWhereWithoutCurrentWeekInput = {
    where?: ProgramWhereInput
    data: XOR<ProgramUpdateWithoutCurrentWeekInput, ProgramUncheckedUpdateWithoutCurrentWeekInput>
  }

  export type ProgramUpdateWithoutCurrentWeekInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    goal?: NullableEnumProgramGoalFieldUpdateOperationsInput | $Enums.ProgramGoal | null
    length?: IntFieldUpdateOperationsInput | number
    days?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    aiPlanJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutProgramsNestedInput
    weeks?: WeekUpdateManyWithoutProgramNestedInput
  }

  export type ProgramUncheckedUpdateWithoutCurrentWeekInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    goal?: NullableEnumProgramGoalFieldUpdateOperationsInput | $Enums.ProgramGoal | null
    length?: IntFieldUpdateOperationsInput | number
    days?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    aiPlanJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weeks?: WeekUncheckedUpdateManyWithoutProgramNestedInput
  }

  export type WeekCreateWithoutWorkoutsInput = {
    id?: string
    weekNumber: number
    createdAt?: Date | string
    updatedAt?: Date | string
    program: ProgramCreateNestedOneWithoutWeeksInput
    currentForProgram?: ProgramCreateNestedOneWithoutCurrentWeekInput
  }

  export type WeekUncheckedCreateWithoutWorkoutsInput = {
    id?: string
    programId: string
    weekNumber: number
    createdAt?: Date | string
    updatedAt?: Date | string
    currentForProgram?: ProgramUncheckedCreateNestedOneWithoutCurrentWeekInput
  }

  export type WeekCreateOrConnectWithoutWorkoutsInput = {
    where: WeekWhereUniqueInput
    create: XOR<WeekCreateWithoutWorkoutsInput, WeekUncheckedCreateWithoutWorkoutsInput>
  }

  export type ExerciseCreateWithoutWorkoutInput = {
    id?: string
    order: number
    exerciseType?: $Enums.ExerciseType
    details?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    completed?: boolean
    template?: ExerciseTemplateCreateNestedOneWithoutExercisesInput
    muscleGroup?: MuscleGroupCreateNestedOneWithoutExercisesInput
    sets?: SetCreateNestedManyWithoutExerciseInput
    currentSet?: SetCreateNestedOneWithoutCurrentForExerciseInput
    currentForWorkout?: WorkoutCreateNestedOneWithoutCurrentExerciseInput
  }

  export type ExerciseUncheckedCreateWithoutWorkoutInput = {
    id?: string
    order: number
    exerciseType?: $Enums.ExerciseType
    exerciseTemplateId?: string | null
    muscleGroupId?: string | null
    details?: string | null
    currentSetId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    completed?: boolean
    sets?: SetUncheckedCreateNestedManyWithoutExerciseInput
    currentForWorkout?: WorkoutUncheckedCreateNestedOneWithoutCurrentExerciseInput
  }

  export type ExerciseCreateOrConnectWithoutWorkoutInput = {
    where: ExerciseWhereUniqueInput
    create: XOR<ExerciseCreateWithoutWorkoutInput, ExerciseUncheckedCreateWithoutWorkoutInput>
  }

  export type ExerciseCreateManyWorkoutInputEnvelope = {
    data: ExerciseCreateManyWorkoutInput | ExerciseCreateManyWorkoutInput[]
    skipDuplicates?: boolean
  }

  export type ExerciseCreateWithoutCurrentForWorkoutInput = {
    id?: string
    order: number
    exerciseType?: $Enums.ExerciseType
    details?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    completed?: boolean
    workout: WorkoutCreateNestedOneWithoutExercisesInput
    template?: ExerciseTemplateCreateNestedOneWithoutExercisesInput
    muscleGroup?: MuscleGroupCreateNestedOneWithoutExercisesInput
    sets?: SetCreateNestedManyWithoutExerciseInput
    currentSet?: SetCreateNestedOneWithoutCurrentForExerciseInput
  }

  export type ExerciseUncheckedCreateWithoutCurrentForWorkoutInput = {
    id?: string
    workoutId: string
    order: number
    exerciseType?: $Enums.ExerciseType
    exerciseTemplateId?: string | null
    muscleGroupId?: string | null
    details?: string | null
    currentSetId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    completed?: boolean
    sets?: SetUncheckedCreateNestedManyWithoutExerciseInput
  }

  export type ExerciseCreateOrConnectWithoutCurrentForWorkoutInput = {
    where: ExerciseWhereUniqueInput
    create: XOR<ExerciseCreateWithoutCurrentForWorkoutInput, ExerciseUncheckedCreateWithoutCurrentForWorkoutInput>
  }

  export type WeekUpsertWithoutWorkoutsInput = {
    update: XOR<WeekUpdateWithoutWorkoutsInput, WeekUncheckedUpdateWithoutWorkoutsInput>
    create: XOR<WeekCreateWithoutWorkoutsInput, WeekUncheckedCreateWithoutWorkoutsInput>
    where?: WeekWhereInput
  }

  export type WeekUpdateToOneWithWhereWithoutWorkoutsInput = {
    where?: WeekWhereInput
    data: XOR<WeekUpdateWithoutWorkoutsInput, WeekUncheckedUpdateWithoutWorkoutsInput>
  }

  export type WeekUpdateWithoutWorkoutsInput = {
    id?: StringFieldUpdateOperationsInput | string
    weekNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    program?: ProgramUpdateOneRequiredWithoutWeeksNestedInput
    currentForProgram?: ProgramUpdateOneWithoutCurrentWeekNestedInput
  }

  export type WeekUncheckedUpdateWithoutWorkoutsInput = {
    id?: StringFieldUpdateOperationsInput | string
    programId?: StringFieldUpdateOperationsInput | string
    weekNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currentForProgram?: ProgramUncheckedUpdateOneWithoutCurrentWeekNestedInput
  }

  export type ExerciseUpsertWithWhereUniqueWithoutWorkoutInput = {
    where: ExerciseWhereUniqueInput
    update: XOR<ExerciseUpdateWithoutWorkoutInput, ExerciseUncheckedUpdateWithoutWorkoutInput>
    create: XOR<ExerciseCreateWithoutWorkoutInput, ExerciseUncheckedCreateWithoutWorkoutInput>
  }

  export type ExerciseUpdateWithWhereUniqueWithoutWorkoutInput = {
    where: ExerciseWhereUniqueInput
    data: XOR<ExerciseUpdateWithoutWorkoutInput, ExerciseUncheckedUpdateWithoutWorkoutInput>
  }

  export type ExerciseUpdateManyWithWhereWithoutWorkoutInput = {
    where: ExerciseScalarWhereInput
    data: XOR<ExerciseUpdateManyMutationInput, ExerciseUncheckedUpdateManyWithoutWorkoutInput>
  }

  export type ExerciseUpsertWithoutCurrentForWorkoutInput = {
    update: XOR<ExerciseUpdateWithoutCurrentForWorkoutInput, ExerciseUncheckedUpdateWithoutCurrentForWorkoutInput>
    create: XOR<ExerciseCreateWithoutCurrentForWorkoutInput, ExerciseUncheckedCreateWithoutCurrentForWorkoutInput>
    where?: ExerciseWhereInput
  }

  export type ExerciseUpdateToOneWithWhereWithoutCurrentForWorkoutInput = {
    where?: ExerciseWhereInput
    data: XOR<ExerciseUpdateWithoutCurrentForWorkoutInput, ExerciseUncheckedUpdateWithoutCurrentForWorkoutInput>
  }

  export type ExerciseUpdateWithoutCurrentForWorkoutInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    exerciseType?: EnumExerciseTypeFieldUpdateOperationsInput | $Enums.ExerciseType
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    workout?: WorkoutUpdateOneRequiredWithoutExercisesNestedInput
    template?: ExerciseTemplateUpdateOneWithoutExercisesNestedInput
    muscleGroup?: MuscleGroupUpdateOneWithoutExercisesNestedInput
    sets?: SetUpdateManyWithoutExerciseNestedInput
    currentSet?: SetUpdateOneWithoutCurrentForExerciseNestedInput
  }

  export type ExerciseUncheckedUpdateWithoutCurrentForWorkoutInput = {
    id?: StringFieldUpdateOperationsInput | string
    workoutId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    exerciseType?: EnumExerciseTypeFieldUpdateOperationsInput | $Enums.ExerciseType
    exerciseTemplateId?: NullableStringFieldUpdateOperationsInput | string | null
    muscleGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    currentSetId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    sets?: SetUncheckedUpdateManyWithoutExerciseNestedInput
  }

  export type UserCreateWithoutExerciseTemplatesInput = {
    id?: string
    clerkId: string
    email: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    programs?: ProgramCreateNestedManyWithoutUserInput
    programTemplates?: ProgramTemplateCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutExerciseTemplatesInput = {
    id?: string
    clerkId: string
    email: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    programs?: ProgramUncheckedCreateNestedManyWithoutUserInput
    programTemplates?: ProgramTemplateUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutExerciseTemplatesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutExerciseTemplatesInput, UserUncheckedCreateWithoutExerciseTemplatesInput>
  }

  export type MuscleGroupCreateWithoutExerciseTemplatesInput = {
    id?: string
    name: string
    shortName?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    exercises?: ExerciseCreateNestedManyWithoutMuscleGroupInput
  }

  export type MuscleGroupUncheckedCreateWithoutExerciseTemplatesInput = {
    id?: string
    name: string
    shortName?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    exercises?: ExerciseUncheckedCreateNestedManyWithoutMuscleGroupInput
  }

  export type MuscleGroupCreateOrConnectWithoutExerciseTemplatesInput = {
    where: MuscleGroupWhereUniqueInput
    create: XOR<MuscleGroupCreateWithoutExerciseTemplatesInput, MuscleGroupUncheckedCreateWithoutExerciseTemplatesInput>
  }

  export type ExerciseCreateWithoutTemplateInput = {
    id?: string
    order: number
    exerciseType?: $Enums.ExerciseType
    details?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    completed?: boolean
    workout: WorkoutCreateNestedOneWithoutExercisesInput
    muscleGroup?: MuscleGroupCreateNestedOneWithoutExercisesInput
    sets?: SetCreateNestedManyWithoutExerciseInput
    currentSet?: SetCreateNestedOneWithoutCurrentForExerciseInput
    currentForWorkout?: WorkoutCreateNestedOneWithoutCurrentExerciseInput
  }

  export type ExerciseUncheckedCreateWithoutTemplateInput = {
    id?: string
    workoutId: string
    order: number
    exerciseType?: $Enums.ExerciseType
    muscleGroupId?: string | null
    details?: string | null
    currentSetId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    completed?: boolean
    sets?: SetUncheckedCreateNestedManyWithoutExerciseInput
    currentForWorkout?: WorkoutUncheckedCreateNestedOneWithoutCurrentExerciseInput
  }

  export type ExerciseCreateOrConnectWithoutTemplateInput = {
    where: ExerciseWhereUniqueInput
    create: XOR<ExerciseCreateWithoutTemplateInput, ExerciseUncheckedCreateWithoutTemplateInput>
  }

  export type ExerciseCreateManyTemplateInputEnvelope = {
    data: ExerciseCreateManyTemplateInput | ExerciseCreateManyTemplateInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutExerciseTemplatesInput = {
    update: XOR<UserUpdateWithoutExerciseTemplatesInput, UserUncheckedUpdateWithoutExerciseTemplatesInput>
    create: XOR<UserCreateWithoutExerciseTemplatesInput, UserUncheckedCreateWithoutExerciseTemplatesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutExerciseTemplatesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutExerciseTemplatesInput, UserUncheckedUpdateWithoutExerciseTemplatesInput>
  }

  export type UserUpdateWithoutExerciseTemplatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    programs?: ProgramUpdateManyWithoutUserNestedInput
    programTemplates?: ProgramTemplateUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutExerciseTemplatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    programs?: ProgramUncheckedUpdateManyWithoutUserNestedInput
    programTemplates?: ProgramTemplateUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MuscleGroupUpsertWithoutExerciseTemplatesInput = {
    update: XOR<MuscleGroupUpdateWithoutExerciseTemplatesInput, MuscleGroupUncheckedUpdateWithoutExerciseTemplatesInput>
    create: XOR<MuscleGroupCreateWithoutExerciseTemplatesInput, MuscleGroupUncheckedCreateWithoutExerciseTemplatesInput>
    where?: MuscleGroupWhereInput
  }

  export type MuscleGroupUpdateToOneWithWhereWithoutExerciseTemplatesInput = {
    where?: MuscleGroupWhereInput
    data: XOR<MuscleGroupUpdateWithoutExerciseTemplatesInput, MuscleGroupUncheckedUpdateWithoutExerciseTemplatesInput>
  }

  export type MuscleGroupUpdateWithoutExerciseTemplatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    shortName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exercises?: ExerciseUpdateManyWithoutMuscleGroupNestedInput
  }

  export type MuscleGroupUncheckedUpdateWithoutExerciseTemplatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    shortName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exercises?: ExerciseUncheckedUpdateManyWithoutMuscleGroupNestedInput
  }

  export type ExerciseUpsertWithWhereUniqueWithoutTemplateInput = {
    where: ExerciseWhereUniqueInput
    update: XOR<ExerciseUpdateWithoutTemplateInput, ExerciseUncheckedUpdateWithoutTemplateInput>
    create: XOR<ExerciseCreateWithoutTemplateInput, ExerciseUncheckedCreateWithoutTemplateInput>
  }

  export type ExerciseUpdateWithWhereUniqueWithoutTemplateInput = {
    where: ExerciseWhereUniqueInput
    data: XOR<ExerciseUpdateWithoutTemplateInput, ExerciseUncheckedUpdateWithoutTemplateInput>
  }

  export type ExerciseUpdateManyWithWhereWithoutTemplateInput = {
    where: ExerciseScalarWhereInput
    data: XOR<ExerciseUpdateManyMutationInput, ExerciseUncheckedUpdateManyWithoutTemplateInput>
  }

  export type WorkoutCreateWithoutExercisesInput = {
    id?: string
    dayNumber: number
    name: string
    mode?: $Enums.WorkoutMode
    focusMuscleGroups?: WorkoutCreatefocusMuscleGroupsInput | string[]
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    completed?: boolean
    week: WeekCreateNestedOneWithoutWorkoutsInput
    currentExercise?: ExerciseCreateNestedOneWithoutCurrentForWorkoutInput
  }

  export type WorkoutUncheckedCreateWithoutExercisesInput = {
    id?: string
    weekId: string
    dayNumber: number
    name: string
    mode?: $Enums.WorkoutMode
    focusMuscleGroups?: WorkoutCreatefocusMuscleGroupsInput | string[]
    notes?: string | null
    currentExerciseId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    completed?: boolean
  }

  export type WorkoutCreateOrConnectWithoutExercisesInput = {
    where: WorkoutWhereUniqueInput
    create: XOR<WorkoutCreateWithoutExercisesInput, WorkoutUncheckedCreateWithoutExercisesInput>
  }

  export type ExerciseTemplateCreateWithoutExercisesInput = {
    id?: string
    name: string
    description?: string | null
    defaultSets?: number | null
    defaultRepsLower?: number | null
    defaultRepsUpper?: number | null
    defaultRir?: number | null
    defaultDetails?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutExerciseTemplatesInput
    muscleGroup?: MuscleGroupCreateNestedOneWithoutExerciseTemplatesInput
  }

  export type ExerciseTemplateUncheckedCreateWithoutExercisesInput = {
    id?: string
    userId?: string | null
    name: string
    description?: string | null
    muscleGroupId?: string | null
    defaultSets?: number | null
    defaultRepsLower?: number | null
    defaultRepsUpper?: number | null
    defaultRir?: number | null
    defaultDetails?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExerciseTemplateCreateOrConnectWithoutExercisesInput = {
    where: ExerciseTemplateWhereUniqueInput
    create: XOR<ExerciseTemplateCreateWithoutExercisesInput, ExerciseTemplateUncheckedCreateWithoutExercisesInput>
  }

  export type MuscleGroupCreateWithoutExercisesInput = {
    id?: string
    name: string
    shortName?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    exerciseTemplates?: ExerciseTemplateCreateNestedManyWithoutMuscleGroupInput
  }

  export type MuscleGroupUncheckedCreateWithoutExercisesInput = {
    id?: string
    name: string
    shortName?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    exerciseTemplates?: ExerciseTemplateUncheckedCreateNestedManyWithoutMuscleGroupInput
  }

  export type MuscleGroupCreateOrConnectWithoutExercisesInput = {
    where: MuscleGroupWhereUniqueInput
    create: XOR<MuscleGroupCreateWithoutExercisesInput, MuscleGroupUncheckedCreateWithoutExercisesInput>
  }

  export type SetCreateWithoutExerciseInput = {
    id?: string
    setNumber: number
    type?: $Enums.SetType
    targetReps?: number | null
    targetWeightKg?: number | null
    minWeightKg?: number | null
    maxWeightKg?: number | null
    rir?: number | null
    rpe?: number | null
    targetDurationSec?: number | null
    targetDistanceM?: number | null
    targetPaceSecPerKm?: number | null
    intensityZone?: string | null
    actualReps?: number | null
    actualWeightKg?: number | null
    actualDurationSec?: number | null
    actualDistanceM?: number | null
    actualRpe?: number | null
    completed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    currentForExercise?: ExerciseCreateNestedOneWithoutCurrentSetInput
  }

  export type SetUncheckedCreateWithoutExerciseInput = {
    id?: string
    setNumber: number
    type?: $Enums.SetType
    targetReps?: number | null
    targetWeightKg?: number | null
    minWeightKg?: number | null
    maxWeightKg?: number | null
    rir?: number | null
    rpe?: number | null
    targetDurationSec?: number | null
    targetDistanceM?: number | null
    targetPaceSecPerKm?: number | null
    intensityZone?: string | null
    actualReps?: number | null
    actualWeightKg?: number | null
    actualDurationSec?: number | null
    actualDistanceM?: number | null
    actualRpe?: number | null
    completed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    currentForExercise?: ExerciseUncheckedCreateNestedOneWithoutCurrentSetInput
  }

  export type SetCreateOrConnectWithoutExerciseInput = {
    where: SetWhereUniqueInput
    create: XOR<SetCreateWithoutExerciseInput, SetUncheckedCreateWithoutExerciseInput>
  }

  export type SetCreateManyExerciseInputEnvelope = {
    data: SetCreateManyExerciseInput | SetCreateManyExerciseInput[]
    skipDuplicates?: boolean
  }

  export type SetCreateWithoutCurrentForExerciseInput = {
    id?: string
    setNumber: number
    type?: $Enums.SetType
    targetReps?: number | null
    targetWeightKg?: number | null
    minWeightKg?: number | null
    maxWeightKg?: number | null
    rir?: number | null
    rpe?: number | null
    targetDurationSec?: number | null
    targetDistanceM?: number | null
    targetPaceSecPerKm?: number | null
    intensityZone?: string | null
    actualReps?: number | null
    actualWeightKg?: number | null
    actualDurationSec?: number | null
    actualDistanceM?: number | null
    actualRpe?: number | null
    completed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    exercise: ExerciseCreateNestedOneWithoutSetsInput
  }

  export type SetUncheckedCreateWithoutCurrentForExerciseInput = {
    id?: string
    exerciseId: string
    setNumber: number
    type?: $Enums.SetType
    targetReps?: number | null
    targetWeightKg?: number | null
    minWeightKg?: number | null
    maxWeightKg?: number | null
    rir?: number | null
    rpe?: number | null
    targetDurationSec?: number | null
    targetDistanceM?: number | null
    targetPaceSecPerKm?: number | null
    intensityZone?: string | null
    actualReps?: number | null
    actualWeightKg?: number | null
    actualDurationSec?: number | null
    actualDistanceM?: number | null
    actualRpe?: number | null
    completed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SetCreateOrConnectWithoutCurrentForExerciseInput = {
    where: SetWhereUniqueInput
    create: XOR<SetCreateWithoutCurrentForExerciseInput, SetUncheckedCreateWithoutCurrentForExerciseInput>
  }

  export type WorkoutCreateWithoutCurrentExerciseInput = {
    id?: string
    dayNumber: number
    name: string
    mode?: $Enums.WorkoutMode
    focusMuscleGroups?: WorkoutCreatefocusMuscleGroupsInput | string[]
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    completed?: boolean
    week: WeekCreateNestedOneWithoutWorkoutsInput
    exercises?: ExerciseCreateNestedManyWithoutWorkoutInput
  }

  export type WorkoutUncheckedCreateWithoutCurrentExerciseInput = {
    id?: string
    weekId: string
    dayNumber: number
    name: string
    mode?: $Enums.WorkoutMode
    focusMuscleGroups?: WorkoutCreatefocusMuscleGroupsInput | string[]
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    completed?: boolean
    exercises?: ExerciseUncheckedCreateNestedManyWithoutWorkoutInput
  }

  export type WorkoutCreateOrConnectWithoutCurrentExerciseInput = {
    where: WorkoutWhereUniqueInput
    create: XOR<WorkoutCreateWithoutCurrentExerciseInput, WorkoutUncheckedCreateWithoutCurrentExerciseInput>
  }

  export type WorkoutUpsertWithoutExercisesInput = {
    update: XOR<WorkoutUpdateWithoutExercisesInput, WorkoutUncheckedUpdateWithoutExercisesInput>
    create: XOR<WorkoutCreateWithoutExercisesInput, WorkoutUncheckedCreateWithoutExercisesInput>
    where?: WorkoutWhereInput
  }

  export type WorkoutUpdateToOneWithWhereWithoutExercisesInput = {
    where?: WorkoutWhereInput
    data: XOR<WorkoutUpdateWithoutExercisesInput, WorkoutUncheckedUpdateWithoutExercisesInput>
  }

  export type WorkoutUpdateWithoutExercisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayNumber?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    mode?: EnumWorkoutModeFieldUpdateOperationsInput | $Enums.WorkoutMode
    focusMuscleGroups?: WorkoutUpdatefocusMuscleGroupsInput | string[]
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    week?: WeekUpdateOneRequiredWithoutWorkoutsNestedInput
    currentExercise?: ExerciseUpdateOneWithoutCurrentForWorkoutNestedInput
  }

  export type WorkoutUncheckedUpdateWithoutExercisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    weekId?: StringFieldUpdateOperationsInput | string
    dayNumber?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    mode?: EnumWorkoutModeFieldUpdateOperationsInput | $Enums.WorkoutMode
    focusMuscleGroups?: WorkoutUpdatefocusMuscleGroupsInput | string[]
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    currentExerciseId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ExerciseTemplateUpsertWithoutExercisesInput = {
    update: XOR<ExerciseTemplateUpdateWithoutExercisesInput, ExerciseTemplateUncheckedUpdateWithoutExercisesInput>
    create: XOR<ExerciseTemplateCreateWithoutExercisesInput, ExerciseTemplateUncheckedCreateWithoutExercisesInput>
    where?: ExerciseTemplateWhereInput
  }

  export type ExerciseTemplateUpdateToOneWithWhereWithoutExercisesInput = {
    where?: ExerciseTemplateWhereInput
    data: XOR<ExerciseTemplateUpdateWithoutExercisesInput, ExerciseTemplateUncheckedUpdateWithoutExercisesInput>
  }

  export type ExerciseTemplateUpdateWithoutExercisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    defaultSets?: NullableIntFieldUpdateOperationsInput | number | null
    defaultRepsLower?: NullableIntFieldUpdateOperationsInput | number | null
    defaultRepsUpper?: NullableIntFieldUpdateOperationsInput | number | null
    defaultRir?: NullableIntFieldUpdateOperationsInput | number | null
    defaultDetails?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutExerciseTemplatesNestedInput
    muscleGroup?: MuscleGroupUpdateOneWithoutExerciseTemplatesNestedInput
  }

  export type ExerciseTemplateUncheckedUpdateWithoutExercisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    muscleGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    defaultSets?: NullableIntFieldUpdateOperationsInput | number | null
    defaultRepsLower?: NullableIntFieldUpdateOperationsInput | number | null
    defaultRepsUpper?: NullableIntFieldUpdateOperationsInput | number | null
    defaultRir?: NullableIntFieldUpdateOperationsInput | number | null
    defaultDetails?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MuscleGroupUpsertWithoutExercisesInput = {
    update: XOR<MuscleGroupUpdateWithoutExercisesInput, MuscleGroupUncheckedUpdateWithoutExercisesInput>
    create: XOR<MuscleGroupCreateWithoutExercisesInput, MuscleGroupUncheckedCreateWithoutExercisesInput>
    where?: MuscleGroupWhereInput
  }

  export type MuscleGroupUpdateToOneWithWhereWithoutExercisesInput = {
    where?: MuscleGroupWhereInput
    data: XOR<MuscleGroupUpdateWithoutExercisesInput, MuscleGroupUncheckedUpdateWithoutExercisesInput>
  }

  export type MuscleGroupUpdateWithoutExercisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    shortName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exerciseTemplates?: ExerciseTemplateUpdateManyWithoutMuscleGroupNestedInput
  }

  export type MuscleGroupUncheckedUpdateWithoutExercisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    shortName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exerciseTemplates?: ExerciseTemplateUncheckedUpdateManyWithoutMuscleGroupNestedInput
  }

  export type SetUpsertWithWhereUniqueWithoutExerciseInput = {
    where: SetWhereUniqueInput
    update: XOR<SetUpdateWithoutExerciseInput, SetUncheckedUpdateWithoutExerciseInput>
    create: XOR<SetCreateWithoutExerciseInput, SetUncheckedCreateWithoutExerciseInput>
  }

  export type SetUpdateWithWhereUniqueWithoutExerciseInput = {
    where: SetWhereUniqueInput
    data: XOR<SetUpdateWithoutExerciseInput, SetUncheckedUpdateWithoutExerciseInput>
  }

  export type SetUpdateManyWithWhereWithoutExerciseInput = {
    where: SetScalarWhereInput
    data: XOR<SetUpdateManyMutationInput, SetUncheckedUpdateManyWithoutExerciseInput>
  }

  export type SetScalarWhereInput = {
    AND?: SetScalarWhereInput | SetScalarWhereInput[]
    OR?: SetScalarWhereInput[]
    NOT?: SetScalarWhereInput | SetScalarWhereInput[]
    id?: StringFilter<"Set"> | string
    exerciseId?: StringFilter<"Set"> | string
    setNumber?: IntFilter<"Set"> | number
    type?: EnumSetTypeFilter<"Set"> | $Enums.SetType
    targetReps?: IntNullableFilter<"Set"> | number | null
    targetWeightKg?: FloatNullableFilter<"Set"> | number | null
    minWeightKg?: FloatNullableFilter<"Set"> | number | null
    maxWeightKg?: FloatNullableFilter<"Set"> | number | null
    rir?: IntNullableFilter<"Set"> | number | null
    rpe?: FloatNullableFilter<"Set"> | number | null
    targetDurationSec?: IntNullableFilter<"Set"> | number | null
    targetDistanceM?: IntNullableFilter<"Set"> | number | null
    targetPaceSecPerKm?: IntNullableFilter<"Set"> | number | null
    intensityZone?: StringNullableFilter<"Set"> | string | null
    actualReps?: IntNullableFilter<"Set"> | number | null
    actualWeightKg?: FloatNullableFilter<"Set"> | number | null
    actualDurationSec?: IntNullableFilter<"Set"> | number | null
    actualDistanceM?: IntNullableFilter<"Set"> | number | null
    actualRpe?: FloatNullableFilter<"Set"> | number | null
    completed?: BoolFilter<"Set"> | boolean
    createdAt?: DateTimeFilter<"Set"> | Date | string
    updatedAt?: DateTimeFilter<"Set"> | Date | string
  }

  export type SetUpsertWithoutCurrentForExerciseInput = {
    update: XOR<SetUpdateWithoutCurrentForExerciseInput, SetUncheckedUpdateWithoutCurrentForExerciseInput>
    create: XOR<SetCreateWithoutCurrentForExerciseInput, SetUncheckedCreateWithoutCurrentForExerciseInput>
    where?: SetWhereInput
  }

  export type SetUpdateToOneWithWhereWithoutCurrentForExerciseInput = {
    where?: SetWhereInput
    data: XOR<SetUpdateWithoutCurrentForExerciseInput, SetUncheckedUpdateWithoutCurrentForExerciseInput>
  }

  export type SetUpdateWithoutCurrentForExerciseInput = {
    id?: StringFieldUpdateOperationsInput | string
    setNumber?: IntFieldUpdateOperationsInput | number
    type?: EnumSetTypeFieldUpdateOperationsInput | $Enums.SetType
    targetReps?: NullableIntFieldUpdateOperationsInput | number | null
    targetWeightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    minWeightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    maxWeightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    rir?: NullableIntFieldUpdateOperationsInput | number | null
    rpe?: NullableFloatFieldUpdateOperationsInput | number | null
    targetDurationSec?: NullableIntFieldUpdateOperationsInput | number | null
    targetDistanceM?: NullableIntFieldUpdateOperationsInput | number | null
    targetPaceSecPerKm?: NullableIntFieldUpdateOperationsInput | number | null
    intensityZone?: NullableStringFieldUpdateOperationsInput | string | null
    actualReps?: NullableIntFieldUpdateOperationsInput | number | null
    actualWeightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    actualDurationSec?: NullableIntFieldUpdateOperationsInput | number | null
    actualDistanceM?: NullableIntFieldUpdateOperationsInput | number | null
    actualRpe?: NullableFloatFieldUpdateOperationsInput | number | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exercise?: ExerciseUpdateOneRequiredWithoutSetsNestedInput
  }

  export type SetUncheckedUpdateWithoutCurrentForExerciseInput = {
    id?: StringFieldUpdateOperationsInput | string
    exerciseId?: StringFieldUpdateOperationsInput | string
    setNumber?: IntFieldUpdateOperationsInput | number
    type?: EnumSetTypeFieldUpdateOperationsInput | $Enums.SetType
    targetReps?: NullableIntFieldUpdateOperationsInput | number | null
    targetWeightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    minWeightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    maxWeightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    rir?: NullableIntFieldUpdateOperationsInput | number | null
    rpe?: NullableFloatFieldUpdateOperationsInput | number | null
    targetDurationSec?: NullableIntFieldUpdateOperationsInput | number | null
    targetDistanceM?: NullableIntFieldUpdateOperationsInput | number | null
    targetPaceSecPerKm?: NullableIntFieldUpdateOperationsInput | number | null
    intensityZone?: NullableStringFieldUpdateOperationsInput | string | null
    actualReps?: NullableIntFieldUpdateOperationsInput | number | null
    actualWeightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    actualDurationSec?: NullableIntFieldUpdateOperationsInput | number | null
    actualDistanceM?: NullableIntFieldUpdateOperationsInput | number | null
    actualRpe?: NullableFloatFieldUpdateOperationsInput | number | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkoutUpsertWithoutCurrentExerciseInput = {
    update: XOR<WorkoutUpdateWithoutCurrentExerciseInput, WorkoutUncheckedUpdateWithoutCurrentExerciseInput>
    create: XOR<WorkoutCreateWithoutCurrentExerciseInput, WorkoutUncheckedCreateWithoutCurrentExerciseInput>
    where?: WorkoutWhereInput
  }

  export type WorkoutUpdateToOneWithWhereWithoutCurrentExerciseInput = {
    where?: WorkoutWhereInput
    data: XOR<WorkoutUpdateWithoutCurrentExerciseInput, WorkoutUncheckedUpdateWithoutCurrentExerciseInput>
  }

  export type WorkoutUpdateWithoutCurrentExerciseInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayNumber?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    mode?: EnumWorkoutModeFieldUpdateOperationsInput | $Enums.WorkoutMode
    focusMuscleGroups?: WorkoutUpdatefocusMuscleGroupsInput | string[]
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    week?: WeekUpdateOneRequiredWithoutWorkoutsNestedInput
    exercises?: ExerciseUpdateManyWithoutWorkoutNestedInput
  }

  export type WorkoutUncheckedUpdateWithoutCurrentExerciseInput = {
    id?: StringFieldUpdateOperationsInput | string
    weekId?: StringFieldUpdateOperationsInput | string
    dayNumber?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    mode?: EnumWorkoutModeFieldUpdateOperationsInput | $Enums.WorkoutMode
    focusMuscleGroups?: WorkoutUpdatefocusMuscleGroupsInput | string[]
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    exercises?: ExerciseUncheckedUpdateManyWithoutWorkoutNestedInput
  }

  export type ExerciseCreateWithoutSetsInput = {
    id?: string
    order: number
    exerciseType?: $Enums.ExerciseType
    details?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    completed?: boolean
    workout: WorkoutCreateNestedOneWithoutExercisesInput
    template?: ExerciseTemplateCreateNestedOneWithoutExercisesInput
    muscleGroup?: MuscleGroupCreateNestedOneWithoutExercisesInput
    currentSet?: SetCreateNestedOneWithoutCurrentForExerciseInput
    currentForWorkout?: WorkoutCreateNestedOneWithoutCurrentExerciseInput
  }

  export type ExerciseUncheckedCreateWithoutSetsInput = {
    id?: string
    workoutId: string
    order: number
    exerciseType?: $Enums.ExerciseType
    exerciseTemplateId?: string | null
    muscleGroupId?: string | null
    details?: string | null
    currentSetId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    completed?: boolean
    currentForWorkout?: WorkoutUncheckedCreateNestedOneWithoutCurrentExerciseInput
  }

  export type ExerciseCreateOrConnectWithoutSetsInput = {
    where: ExerciseWhereUniqueInput
    create: XOR<ExerciseCreateWithoutSetsInput, ExerciseUncheckedCreateWithoutSetsInput>
  }

  export type ExerciseCreateWithoutCurrentSetInput = {
    id?: string
    order: number
    exerciseType?: $Enums.ExerciseType
    details?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    completed?: boolean
    workout: WorkoutCreateNestedOneWithoutExercisesInput
    template?: ExerciseTemplateCreateNestedOneWithoutExercisesInput
    muscleGroup?: MuscleGroupCreateNestedOneWithoutExercisesInput
    sets?: SetCreateNestedManyWithoutExerciseInput
    currentForWorkout?: WorkoutCreateNestedOneWithoutCurrentExerciseInput
  }

  export type ExerciseUncheckedCreateWithoutCurrentSetInput = {
    id?: string
    workoutId: string
    order: number
    exerciseType?: $Enums.ExerciseType
    exerciseTemplateId?: string | null
    muscleGroupId?: string | null
    details?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    completed?: boolean
    sets?: SetUncheckedCreateNestedManyWithoutExerciseInput
    currentForWorkout?: WorkoutUncheckedCreateNestedOneWithoutCurrentExerciseInput
  }

  export type ExerciseCreateOrConnectWithoutCurrentSetInput = {
    where: ExerciseWhereUniqueInput
    create: XOR<ExerciseCreateWithoutCurrentSetInput, ExerciseUncheckedCreateWithoutCurrentSetInput>
  }

  export type ExerciseUpsertWithoutSetsInput = {
    update: XOR<ExerciseUpdateWithoutSetsInput, ExerciseUncheckedUpdateWithoutSetsInput>
    create: XOR<ExerciseCreateWithoutSetsInput, ExerciseUncheckedCreateWithoutSetsInput>
    where?: ExerciseWhereInput
  }

  export type ExerciseUpdateToOneWithWhereWithoutSetsInput = {
    where?: ExerciseWhereInput
    data: XOR<ExerciseUpdateWithoutSetsInput, ExerciseUncheckedUpdateWithoutSetsInput>
  }

  export type ExerciseUpdateWithoutSetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    exerciseType?: EnumExerciseTypeFieldUpdateOperationsInput | $Enums.ExerciseType
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    workout?: WorkoutUpdateOneRequiredWithoutExercisesNestedInput
    template?: ExerciseTemplateUpdateOneWithoutExercisesNestedInput
    muscleGroup?: MuscleGroupUpdateOneWithoutExercisesNestedInput
    currentSet?: SetUpdateOneWithoutCurrentForExerciseNestedInput
    currentForWorkout?: WorkoutUpdateOneWithoutCurrentExerciseNestedInput
  }

  export type ExerciseUncheckedUpdateWithoutSetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    workoutId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    exerciseType?: EnumExerciseTypeFieldUpdateOperationsInput | $Enums.ExerciseType
    exerciseTemplateId?: NullableStringFieldUpdateOperationsInput | string | null
    muscleGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    currentSetId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    currentForWorkout?: WorkoutUncheckedUpdateOneWithoutCurrentExerciseNestedInput
  }

  export type ExerciseUpsertWithoutCurrentSetInput = {
    update: XOR<ExerciseUpdateWithoutCurrentSetInput, ExerciseUncheckedUpdateWithoutCurrentSetInput>
    create: XOR<ExerciseCreateWithoutCurrentSetInput, ExerciseUncheckedCreateWithoutCurrentSetInput>
    where?: ExerciseWhereInput
  }

  export type ExerciseUpdateToOneWithWhereWithoutCurrentSetInput = {
    where?: ExerciseWhereInput
    data: XOR<ExerciseUpdateWithoutCurrentSetInput, ExerciseUncheckedUpdateWithoutCurrentSetInput>
  }

  export type ExerciseUpdateWithoutCurrentSetInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    exerciseType?: EnumExerciseTypeFieldUpdateOperationsInput | $Enums.ExerciseType
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    workout?: WorkoutUpdateOneRequiredWithoutExercisesNestedInput
    template?: ExerciseTemplateUpdateOneWithoutExercisesNestedInput
    muscleGroup?: MuscleGroupUpdateOneWithoutExercisesNestedInput
    sets?: SetUpdateManyWithoutExerciseNestedInput
    currentForWorkout?: WorkoutUpdateOneWithoutCurrentExerciseNestedInput
  }

  export type ExerciseUncheckedUpdateWithoutCurrentSetInput = {
    id?: StringFieldUpdateOperationsInput | string
    workoutId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    exerciseType?: EnumExerciseTypeFieldUpdateOperationsInput | $Enums.ExerciseType
    exerciseTemplateId?: NullableStringFieldUpdateOperationsInput | string | null
    muscleGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    sets?: SetUncheckedUpdateManyWithoutExerciseNestedInput
    currentForWorkout?: WorkoutUncheckedUpdateOneWithoutCurrentExerciseNestedInput
  }

  export type ProgramCreateManyUserInput = {
    id?: string
    name: string
    goal?: $Enums.ProgramGoal | null
    length: number
    days: number
    currentWeekId?: string | null
    completed?: boolean
    aiPlanJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExerciseTemplateCreateManyUserInput = {
    id?: string
    name: string
    description?: string | null
    muscleGroupId?: string | null
    defaultSets?: number | null
    defaultRepsLower?: number | null
    defaultRepsUpper?: number | null
    defaultRir?: number | null
    defaultDetails?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProgramTemplateCreateManyUserInput = {
    id?: string
    name: string
    goal?: $Enums.ProgramGoal | null
    length: number
    days: number
    structureJson?: NullableJsonNullValueInput | InputJsonValue
    aiPlanJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProgramUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    goal?: NullableEnumProgramGoalFieldUpdateOperationsInput | $Enums.ProgramGoal | null
    length?: IntFieldUpdateOperationsInput | number
    days?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    aiPlanJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weeks?: WeekUpdateManyWithoutProgramNestedInput
    currentWeek?: WeekUpdateOneWithoutCurrentForProgramNestedInput
  }

  export type ProgramUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    goal?: NullableEnumProgramGoalFieldUpdateOperationsInput | $Enums.ProgramGoal | null
    length?: IntFieldUpdateOperationsInput | number
    days?: IntFieldUpdateOperationsInput | number
    currentWeekId?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    aiPlanJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weeks?: WeekUncheckedUpdateManyWithoutProgramNestedInput
  }

  export type ProgramUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    goal?: NullableEnumProgramGoalFieldUpdateOperationsInput | $Enums.ProgramGoal | null
    length?: IntFieldUpdateOperationsInput | number
    days?: IntFieldUpdateOperationsInput | number
    currentWeekId?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    aiPlanJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExerciseTemplateUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    defaultSets?: NullableIntFieldUpdateOperationsInput | number | null
    defaultRepsLower?: NullableIntFieldUpdateOperationsInput | number | null
    defaultRepsUpper?: NullableIntFieldUpdateOperationsInput | number | null
    defaultRir?: NullableIntFieldUpdateOperationsInput | number | null
    defaultDetails?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    muscleGroup?: MuscleGroupUpdateOneWithoutExerciseTemplatesNestedInput
    exercises?: ExerciseUpdateManyWithoutTemplateNestedInput
  }

  export type ExerciseTemplateUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    muscleGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    defaultSets?: NullableIntFieldUpdateOperationsInput | number | null
    defaultRepsLower?: NullableIntFieldUpdateOperationsInput | number | null
    defaultRepsUpper?: NullableIntFieldUpdateOperationsInput | number | null
    defaultRir?: NullableIntFieldUpdateOperationsInput | number | null
    defaultDetails?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exercises?: ExerciseUncheckedUpdateManyWithoutTemplateNestedInput
  }

  export type ExerciseTemplateUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    muscleGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    defaultSets?: NullableIntFieldUpdateOperationsInput | number | null
    defaultRepsLower?: NullableIntFieldUpdateOperationsInput | number | null
    defaultRepsUpper?: NullableIntFieldUpdateOperationsInput | number | null
    defaultRir?: NullableIntFieldUpdateOperationsInput | number | null
    defaultDetails?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgramTemplateUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    goal?: NullableEnumProgramGoalFieldUpdateOperationsInput | $Enums.ProgramGoal | null
    length?: IntFieldUpdateOperationsInput | number
    days?: IntFieldUpdateOperationsInput | number
    structureJson?: NullableJsonNullValueInput | InputJsonValue
    aiPlanJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgramTemplateUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    goal?: NullableEnumProgramGoalFieldUpdateOperationsInput | $Enums.ProgramGoal | null
    length?: IntFieldUpdateOperationsInput | number
    days?: IntFieldUpdateOperationsInput | number
    structureJson?: NullableJsonNullValueInput | InputJsonValue
    aiPlanJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgramTemplateUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    goal?: NullableEnumProgramGoalFieldUpdateOperationsInput | $Enums.ProgramGoal | null
    length?: IntFieldUpdateOperationsInput | number
    days?: IntFieldUpdateOperationsInput | number
    structureJson?: NullableJsonNullValueInput | InputJsonValue
    aiPlanJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExerciseCreateManyMuscleGroupInput = {
    id?: string
    workoutId: string
    order: number
    exerciseType?: $Enums.ExerciseType
    exerciseTemplateId?: string | null
    details?: string | null
    currentSetId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    completed?: boolean
  }

  export type ExerciseTemplateCreateManyMuscleGroupInput = {
    id?: string
    userId?: string | null
    name: string
    description?: string | null
    defaultSets?: number | null
    defaultRepsLower?: number | null
    defaultRepsUpper?: number | null
    defaultRir?: number | null
    defaultDetails?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExerciseUpdateWithoutMuscleGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    exerciseType?: EnumExerciseTypeFieldUpdateOperationsInput | $Enums.ExerciseType
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    workout?: WorkoutUpdateOneRequiredWithoutExercisesNestedInput
    template?: ExerciseTemplateUpdateOneWithoutExercisesNestedInput
    sets?: SetUpdateManyWithoutExerciseNestedInput
    currentSet?: SetUpdateOneWithoutCurrentForExerciseNestedInput
    currentForWorkout?: WorkoutUpdateOneWithoutCurrentExerciseNestedInput
  }

  export type ExerciseUncheckedUpdateWithoutMuscleGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    workoutId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    exerciseType?: EnumExerciseTypeFieldUpdateOperationsInput | $Enums.ExerciseType
    exerciseTemplateId?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    currentSetId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    sets?: SetUncheckedUpdateManyWithoutExerciseNestedInput
    currentForWorkout?: WorkoutUncheckedUpdateOneWithoutCurrentExerciseNestedInput
  }

  export type ExerciseUncheckedUpdateManyWithoutMuscleGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    workoutId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    exerciseType?: EnumExerciseTypeFieldUpdateOperationsInput | $Enums.ExerciseType
    exerciseTemplateId?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    currentSetId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ExerciseTemplateUpdateWithoutMuscleGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    defaultSets?: NullableIntFieldUpdateOperationsInput | number | null
    defaultRepsLower?: NullableIntFieldUpdateOperationsInput | number | null
    defaultRepsUpper?: NullableIntFieldUpdateOperationsInput | number | null
    defaultRir?: NullableIntFieldUpdateOperationsInput | number | null
    defaultDetails?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutExerciseTemplatesNestedInput
    exercises?: ExerciseUpdateManyWithoutTemplateNestedInput
  }

  export type ExerciseTemplateUncheckedUpdateWithoutMuscleGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    defaultSets?: NullableIntFieldUpdateOperationsInput | number | null
    defaultRepsLower?: NullableIntFieldUpdateOperationsInput | number | null
    defaultRepsUpper?: NullableIntFieldUpdateOperationsInput | number | null
    defaultRir?: NullableIntFieldUpdateOperationsInput | number | null
    defaultDetails?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exercises?: ExerciseUncheckedUpdateManyWithoutTemplateNestedInput
  }

  export type ExerciseTemplateUncheckedUpdateManyWithoutMuscleGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    defaultSets?: NullableIntFieldUpdateOperationsInput | number | null
    defaultRepsLower?: NullableIntFieldUpdateOperationsInput | number | null
    defaultRepsUpper?: NullableIntFieldUpdateOperationsInput | number | null
    defaultRir?: NullableIntFieldUpdateOperationsInput | number | null
    defaultDetails?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeekCreateManyProgramInput = {
    id?: string
    weekNumber: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WeekUpdateWithoutProgramInput = {
    id?: StringFieldUpdateOperationsInput | string
    weekNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workouts?: WorkoutUpdateManyWithoutWeekNestedInput
    currentForProgram?: ProgramUpdateOneWithoutCurrentWeekNestedInput
  }

  export type WeekUncheckedUpdateWithoutProgramInput = {
    id?: StringFieldUpdateOperationsInput | string
    weekNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workouts?: WorkoutUncheckedUpdateManyWithoutWeekNestedInput
    currentForProgram?: ProgramUncheckedUpdateOneWithoutCurrentWeekNestedInput
  }

  export type WeekUncheckedUpdateManyWithoutProgramInput = {
    id?: StringFieldUpdateOperationsInput | string
    weekNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkoutCreateManyWeekInput = {
    id?: string
    dayNumber: number
    name: string
    mode?: $Enums.WorkoutMode
    focusMuscleGroups?: WorkoutCreatefocusMuscleGroupsInput | string[]
    notes?: string | null
    currentExerciseId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    completed?: boolean
  }

  export type WorkoutUpdateWithoutWeekInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayNumber?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    mode?: EnumWorkoutModeFieldUpdateOperationsInput | $Enums.WorkoutMode
    focusMuscleGroups?: WorkoutUpdatefocusMuscleGroupsInput | string[]
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    exercises?: ExerciseUpdateManyWithoutWorkoutNestedInput
    currentExercise?: ExerciseUpdateOneWithoutCurrentForWorkoutNestedInput
  }

  export type WorkoutUncheckedUpdateWithoutWeekInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayNumber?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    mode?: EnumWorkoutModeFieldUpdateOperationsInput | $Enums.WorkoutMode
    focusMuscleGroups?: WorkoutUpdatefocusMuscleGroupsInput | string[]
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    currentExerciseId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    exercises?: ExerciseUncheckedUpdateManyWithoutWorkoutNestedInput
  }

  export type WorkoutUncheckedUpdateManyWithoutWeekInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayNumber?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    mode?: EnumWorkoutModeFieldUpdateOperationsInput | $Enums.WorkoutMode
    focusMuscleGroups?: WorkoutUpdatefocusMuscleGroupsInput | string[]
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    currentExerciseId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ExerciseCreateManyWorkoutInput = {
    id?: string
    order: number
    exerciseType?: $Enums.ExerciseType
    exerciseTemplateId?: string | null
    muscleGroupId?: string | null
    details?: string | null
    currentSetId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    completed?: boolean
  }

  export type ExerciseUpdateWithoutWorkoutInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    exerciseType?: EnumExerciseTypeFieldUpdateOperationsInput | $Enums.ExerciseType
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    template?: ExerciseTemplateUpdateOneWithoutExercisesNestedInput
    muscleGroup?: MuscleGroupUpdateOneWithoutExercisesNestedInput
    sets?: SetUpdateManyWithoutExerciseNestedInput
    currentSet?: SetUpdateOneWithoutCurrentForExerciseNestedInput
    currentForWorkout?: WorkoutUpdateOneWithoutCurrentExerciseNestedInput
  }

  export type ExerciseUncheckedUpdateWithoutWorkoutInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    exerciseType?: EnumExerciseTypeFieldUpdateOperationsInput | $Enums.ExerciseType
    exerciseTemplateId?: NullableStringFieldUpdateOperationsInput | string | null
    muscleGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    currentSetId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    sets?: SetUncheckedUpdateManyWithoutExerciseNestedInput
    currentForWorkout?: WorkoutUncheckedUpdateOneWithoutCurrentExerciseNestedInput
  }

  export type ExerciseUncheckedUpdateManyWithoutWorkoutInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    exerciseType?: EnumExerciseTypeFieldUpdateOperationsInput | $Enums.ExerciseType
    exerciseTemplateId?: NullableStringFieldUpdateOperationsInput | string | null
    muscleGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    currentSetId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ExerciseCreateManyTemplateInput = {
    id?: string
    workoutId: string
    order: number
    exerciseType?: $Enums.ExerciseType
    muscleGroupId?: string | null
    details?: string | null
    currentSetId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    completed?: boolean
  }

  export type ExerciseUpdateWithoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    exerciseType?: EnumExerciseTypeFieldUpdateOperationsInput | $Enums.ExerciseType
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    workout?: WorkoutUpdateOneRequiredWithoutExercisesNestedInput
    muscleGroup?: MuscleGroupUpdateOneWithoutExercisesNestedInput
    sets?: SetUpdateManyWithoutExerciseNestedInput
    currentSet?: SetUpdateOneWithoutCurrentForExerciseNestedInput
    currentForWorkout?: WorkoutUpdateOneWithoutCurrentExerciseNestedInput
  }

  export type ExerciseUncheckedUpdateWithoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workoutId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    exerciseType?: EnumExerciseTypeFieldUpdateOperationsInput | $Enums.ExerciseType
    muscleGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    currentSetId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    sets?: SetUncheckedUpdateManyWithoutExerciseNestedInput
    currentForWorkout?: WorkoutUncheckedUpdateOneWithoutCurrentExerciseNestedInput
  }

  export type ExerciseUncheckedUpdateManyWithoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workoutId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    exerciseType?: EnumExerciseTypeFieldUpdateOperationsInput | $Enums.ExerciseType
    muscleGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    currentSetId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SetCreateManyExerciseInput = {
    id?: string
    setNumber: number
    type?: $Enums.SetType
    targetReps?: number | null
    targetWeightKg?: number | null
    minWeightKg?: number | null
    maxWeightKg?: number | null
    rir?: number | null
    rpe?: number | null
    targetDurationSec?: number | null
    targetDistanceM?: number | null
    targetPaceSecPerKm?: number | null
    intensityZone?: string | null
    actualReps?: number | null
    actualWeightKg?: number | null
    actualDurationSec?: number | null
    actualDistanceM?: number | null
    actualRpe?: number | null
    completed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SetUpdateWithoutExerciseInput = {
    id?: StringFieldUpdateOperationsInput | string
    setNumber?: IntFieldUpdateOperationsInput | number
    type?: EnumSetTypeFieldUpdateOperationsInput | $Enums.SetType
    targetReps?: NullableIntFieldUpdateOperationsInput | number | null
    targetWeightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    minWeightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    maxWeightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    rir?: NullableIntFieldUpdateOperationsInput | number | null
    rpe?: NullableFloatFieldUpdateOperationsInput | number | null
    targetDurationSec?: NullableIntFieldUpdateOperationsInput | number | null
    targetDistanceM?: NullableIntFieldUpdateOperationsInput | number | null
    targetPaceSecPerKm?: NullableIntFieldUpdateOperationsInput | number | null
    intensityZone?: NullableStringFieldUpdateOperationsInput | string | null
    actualReps?: NullableIntFieldUpdateOperationsInput | number | null
    actualWeightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    actualDurationSec?: NullableIntFieldUpdateOperationsInput | number | null
    actualDistanceM?: NullableIntFieldUpdateOperationsInput | number | null
    actualRpe?: NullableFloatFieldUpdateOperationsInput | number | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currentForExercise?: ExerciseUpdateOneWithoutCurrentSetNestedInput
  }

  export type SetUncheckedUpdateWithoutExerciseInput = {
    id?: StringFieldUpdateOperationsInput | string
    setNumber?: IntFieldUpdateOperationsInput | number
    type?: EnumSetTypeFieldUpdateOperationsInput | $Enums.SetType
    targetReps?: NullableIntFieldUpdateOperationsInput | number | null
    targetWeightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    minWeightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    maxWeightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    rir?: NullableIntFieldUpdateOperationsInput | number | null
    rpe?: NullableFloatFieldUpdateOperationsInput | number | null
    targetDurationSec?: NullableIntFieldUpdateOperationsInput | number | null
    targetDistanceM?: NullableIntFieldUpdateOperationsInput | number | null
    targetPaceSecPerKm?: NullableIntFieldUpdateOperationsInput | number | null
    intensityZone?: NullableStringFieldUpdateOperationsInput | string | null
    actualReps?: NullableIntFieldUpdateOperationsInput | number | null
    actualWeightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    actualDurationSec?: NullableIntFieldUpdateOperationsInput | number | null
    actualDistanceM?: NullableIntFieldUpdateOperationsInput | number | null
    actualRpe?: NullableFloatFieldUpdateOperationsInput | number | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currentForExercise?: ExerciseUncheckedUpdateOneWithoutCurrentSetNestedInput
  }

  export type SetUncheckedUpdateManyWithoutExerciseInput = {
    id?: StringFieldUpdateOperationsInput | string
    setNumber?: IntFieldUpdateOperationsInput | number
    type?: EnumSetTypeFieldUpdateOperationsInput | $Enums.SetType
    targetReps?: NullableIntFieldUpdateOperationsInput | number | null
    targetWeightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    minWeightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    maxWeightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    rir?: NullableIntFieldUpdateOperationsInput | number | null
    rpe?: NullableFloatFieldUpdateOperationsInput | number | null
    targetDurationSec?: NullableIntFieldUpdateOperationsInput | number | null
    targetDistanceM?: NullableIntFieldUpdateOperationsInput | number | null
    targetPaceSecPerKm?: NullableIntFieldUpdateOperationsInput | number | null
    intensityZone?: NullableStringFieldUpdateOperationsInput | string | null
    actualReps?: NullableIntFieldUpdateOperationsInput | number | null
    actualWeightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    actualDurationSec?: NullableIntFieldUpdateOperationsInput | number | null
    actualDistanceM?: NullableIntFieldUpdateOperationsInput | number | null
    actualRpe?: NullableFloatFieldUpdateOperationsInput | number | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}