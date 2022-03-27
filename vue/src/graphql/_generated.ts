import gql from 'graphql-tag';
import * as Urql from '@urql/vue';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "records" */
  delete_records?: Maybe<Records_Mutation_Response>;
  /** delete single row from the table: "records" */
  delete_records_by_pk?: Maybe<Records>;
  /** insert data into the table: "records" */
  insert_records?: Maybe<Records_Mutation_Response>;
  /** insert a single row into the table: "records" */
  insert_records_one?: Maybe<Records>;
  /** update data of the table: "records" */
  update_records?: Maybe<Records_Mutation_Response>;
  /** update single row of the table: "records" */
  update_records_by_pk?: Maybe<Records>;
};


/** mutation root */
export type Mutation_RootDelete_RecordsArgs = {
  where: Records_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Records_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_RecordsArgs = {
  objects: Array<Records_Insert_Input>;
  on_conflict?: InputMaybe<Records_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Records_OneArgs = {
  object: Records_Insert_Input;
  on_conflict?: InputMaybe<Records_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_RecordsArgs = {
  _inc?: InputMaybe<Records_Inc_Input>;
  _set?: InputMaybe<Records_Set_Input>;
  where: Records_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Records_By_PkArgs = {
  _inc?: InputMaybe<Records_Inc_Input>;
  _set?: InputMaybe<Records_Set_Input>;
  pk_columns: Records_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "records" */
  records: Array<Records>;
  /** fetch aggregated fields from the table: "records" */
  records_aggregate: Records_Aggregate;
  /** fetch data from the table: "records" using primary key columns */
  records_by_pk?: Maybe<Records>;
};


export type Query_RootRecordsArgs = {
  distinct_on?: InputMaybe<Array<Records_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Records_Order_By>>;
  where?: InputMaybe<Records_Bool_Exp>;
};


export type Query_RootRecords_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Records_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Records_Order_By>>;
  where?: InputMaybe<Records_Bool_Exp>;
};


export type Query_RootRecords_By_PkArgs = {
  id: Scalars['Int'];
};

/** columns and relationships of "records" */
export type Records = {
  __typename?: 'records';
  active: Scalars['Boolean'];
  boundary: Scalars['String'];
  id: Scalars['Int'];
  label: Scalars['String'];
  periodicity: Scalars['Int'];
  tags?: Maybe<Scalars['String']>;
  url: Scalars['String'];
};

/** aggregated selection of "records" */
export type Records_Aggregate = {
  __typename?: 'records_aggregate';
  aggregate?: Maybe<Records_Aggregate_Fields>;
  nodes: Array<Records>;
};

/** aggregate fields of "records" */
export type Records_Aggregate_Fields = {
  __typename?: 'records_aggregate_fields';
  avg?: Maybe<Records_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Records_Max_Fields>;
  min?: Maybe<Records_Min_Fields>;
  stddev?: Maybe<Records_Stddev_Fields>;
  stddev_pop?: Maybe<Records_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Records_Stddev_Samp_Fields>;
  sum?: Maybe<Records_Sum_Fields>;
  var_pop?: Maybe<Records_Var_Pop_Fields>;
  var_samp?: Maybe<Records_Var_Samp_Fields>;
  variance?: Maybe<Records_Variance_Fields>;
};


/** aggregate fields of "records" */
export type Records_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Records_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Records_Avg_Fields = {
  __typename?: 'records_avg_fields';
  id?: Maybe<Scalars['Float']>;
  periodicity?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "records". All fields are combined with a logical 'AND'. */
export type Records_Bool_Exp = {
  _and?: InputMaybe<Array<Records_Bool_Exp>>;
  _not?: InputMaybe<Records_Bool_Exp>;
  _or?: InputMaybe<Array<Records_Bool_Exp>>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  boundary?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  label?: InputMaybe<String_Comparison_Exp>;
  periodicity?: InputMaybe<Int_Comparison_Exp>;
  tags?: InputMaybe<String_Comparison_Exp>;
  url?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "records" */
export enum Records_Constraint {
  /** unique or primary key constraint */
  RecordsPkey = 'records_pkey'
}

/** input type for incrementing numeric columns in table "records" */
export type Records_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  periodicity?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "records" */
export type Records_Insert_Input = {
  active?: InputMaybe<Scalars['Boolean']>;
  boundary?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  label?: InputMaybe<Scalars['String']>;
  periodicity?: InputMaybe<Scalars['Int']>;
  tags?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Records_Max_Fields = {
  __typename?: 'records_max_fields';
  boundary?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  label?: Maybe<Scalars['String']>;
  periodicity?: Maybe<Scalars['Int']>;
  tags?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Records_Min_Fields = {
  __typename?: 'records_min_fields';
  boundary?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  label?: Maybe<Scalars['String']>;
  periodicity?: Maybe<Scalars['Int']>;
  tags?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "records" */
export type Records_Mutation_Response = {
  __typename?: 'records_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Records>;
};

/** on_conflict condition type for table "records" */
export type Records_On_Conflict = {
  constraint: Records_Constraint;
  update_columns?: Array<Records_Update_Column>;
  where?: InputMaybe<Records_Bool_Exp>;
};

/** Ordering options when selecting data from "records". */
export type Records_Order_By = {
  active?: InputMaybe<Order_By>;
  boundary?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  label?: InputMaybe<Order_By>;
  periodicity?: InputMaybe<Order_By>;
  tags?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
};

/** primary key columns input for table: records */
export type Records_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "records" */
export enum Records_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  Boundary = 'boundary',
  /** column name */
  Id = 'id',
  /** column name */
  Label = 'label',
  /** column name */
  Periodicity = 'periodicity',
  /** column name */
  Tags = 'tags',
  /** column name */
  Url = 'url'
}

/** input type for updating data in table "records" */
export type Records_Set_Input = {
  active?: InputMaybe<Scalars['Boolean']>;
  boundary?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  label?: InputMaybe<Scalars['String']>;
  periodicity?: InputMaybe<Scalars['Int']>;
  tags?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Records_Stddev_Fields = {
  __typename?: 'records_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  periodicity?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Records_Stddev_Pop_Fields = {
  __typename?: 'records_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  periodicity?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Records_Stddev_Samp_Fields = {
  __typename?: 'records_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  periodicity?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Records_Sum_Fields = {
  __typename?: 'records_sum_fields';
  id?: Maybe<Scalars['Int']>;
  periodicity?: Maybe<Scalars['Int']>;
};

/** update columns of table "records" */
export enum Records_Update_Column {
  /** column name */
  Active = 'active',
  /** column name */
  Boundary = 'boundary',
  /** column name */
  Id = 'id',
  /** column name */
  Label = 'label',
  /** column name */
  Periodicity = 'periodicity',
  /** column name */
  Tags = 'tags',
  /** column name */
  Url = 'url'
}

/** aggregate var_pop on columns */
export type Records_Var_Pop_Fields = {
  __typename?: 'records_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  periodicity?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Records_Var_Samp_Fields = {
  __typename?: 'records_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  periodicity?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Records_Variance_Fields = {
  __typename?: 'records_variance_fields';
  id?: Maybe<Scalars['Float']>;
  periodicity?: Maybe<Scalars['Float']>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "records" */
  records: Array<Records>;
  /** fetch aggregated fields from the table: "records" */
  records_aggregate: Records_Aggregate;
  /** fetch data from the table: "records" using primary key columns */
  records_by_pk?: Maybe<Records>;
};


export type Subscription_RootRecordsArgs = {
  distinct_on?: InputMaybe<Array<Records_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Records_Order_By>>;
  where?: InputMaybe<Records_Bool_Exp>;
};


export type Subscription_RootRecords_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Records_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Records_Order_By>>;
  where?: InputMaybe<Records_Bool_Exp>;
};


export type Subscription_RootRecords_By_PkArgs = {
  id: Scalars['Int'];
};

export type AllRecordsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllRecordsQuery = { __typename?: 'query_root', records: Array<{ __typename?: 'records', id: number, active: boolean, boundary: string, label: string, periodicity: number, tags?: string | null, url: string }> };

export type InsertRecordMutationVariables = Exact<{
  tags?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  periodicity?: InputMaybe<Scalars['Int']>;
  label?: InputMaybe<Scalars['String']>;
  boundary?: InputMaybe<Scalars['String']>;
  active?: InputMaybe<Scalars['Boolean']>;
}>;


export type InsertRecordMutation = { __typename?: 'mutation_root', insert_records_one?: { __typename?: 'records', id: number } | null };


export const AllRecordsDocument = gql`
    query AllRecords {
  records {
    id
    active
    boundary
    label
    periodicity
    tags
    url
  }
}
    `;

export function useAllRecordsQuery(options: Omit<Urql.UseQueryArgs<never, AllRecordsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<AllRecordsQuery>({ query: AllRecordsDocument, ...options });
};
export const InsertRecordDocument = gql`
    mutation InsertRecord($tags: String = "", $url: String = "", $periodicity: Int = 10, $label: String = "", $boundary: String = "", $active: Boolean = false) {
  insert_records_one(
    object: {active: $active, boundary: $boundary, label: $label, periodicity: $periodicity, tags: $tags, url: $url}
  ) {
    id
  }
}
    `;

export function useInsertRecordMutation() {
  return Urql.useMutation<InsertRecordMutation, InsertRecordMutationVariables>(InsertRecordDocument);
};