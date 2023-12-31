import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  JSON: { input: any; output: any; }
  Time: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  contains?: InputMaybe<Scalars['Boolean']['input']>;
  containsi?: InputMaybe<Scalars['Boolean']['input']>;
  endsWith?: InputMaybe<Scalars['Boolean']['input']>;
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  eqi?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Boolean']['input']>;
  gte?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  lt?: InputMaybe<Scalars['Boolean']['input']>;
  lte?: InputMaybe<Scalars['Boolean']['input']>;
  ne?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']['input']>;
  notContainsi?: InputMaybe<Scalars['Boolean']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Cargo = {
  __typename?: 'Cargo';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  estado?: Maybe<Scalars['Boolean']['output']>;
  nombre?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type CargoUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CargoEntity = {
  __typename?: 'CargoEntity';
  attributes?: Maybe<Cargo>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type CargoEntityResponse = {
  __typename?: 'CargoEntityResponse';
  data?: Maybe<CargoEntity>;
};

export type CargoEntityResponseCollection = {
  __typename?: 'CargoEntityResponseCollection';
  data: Array<CargoEntity>;
  meta: ResponseCollectionMeta;
};

export type CargoFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CargoFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  estado?: InputMaybe<BooleanFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  nombre?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<CargoFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CargoFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type CargoInput = {
  estado?: InputMaybe<Scalars['Boolean']['input']>;
  nombre?: InputMaybe<Scalars['String']['input']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  contains?: InputMaybe<Scalars['DateTime']['input']>;
  containsi?: InputMaybe<Scalars['DateTime']['input']>;
  endsWith?: InputMaybe<Scalars['DateTime']['input']>;
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  eqi?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  ne?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']['input']>;
  notContainsi?: InputMaybe<Scalars['DateTime']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']['input']>;
};

export enum Enum_Pedido_Stage {
  FinalPoint = 'FINAL_POINT',
  InitialPoint = 'INITIAL_POINT',
  Read = 'READ',
  StandBy = 'STAND_BY'
}

export type Estacione = {
  __typename?: 'Estacione';
  codigoNFC?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  nombre?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type EstacioneEntity = {
  __typename?: 'EstacioneEntity';
  attributes?: Maybe<Estacione>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type EstacioneEntityResponse = {
  __typename?: 'EstacioneEntityResponse';
  data?: Maybe<EstacioneEntity>;
};

export type EstacioneEntityResponseCollection = {
  __typename?: 'EstacioneEntityResponseCollection';
  data: Array<EstacioneEntity>;
  meta: ResponseCollectionMeta;
};

export type EstacioneFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<EstacioneFiltersInput>>>;
  codigoNFC?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  nombre?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<EstacioneFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<EstacioneFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type EstacioneInput = {
  codigoNFC?: InputMaybe<Scalars['String']['input']>;
  nombre?: InputMaybe<Scalars['String']['input']>;
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  contains?: InputMaybe<Scalars['Float']['input']>;
  containsi?: InputMaybe<Scalars['Float']['input']>;
  endsWith?: InputMaybe<Scalars['Float']['input']>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  eqi?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  ne?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']['input']>;
  notContainsi?: InputMaybe<Scalars['Float']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  startsWith?: InputMaybe<Scalars['Float']['input']>;
};

export type GenericMorph = Cargo | Estacione | I18NLocale | Observacione | Pedido | Turno | Ubicacione | UploadFile | UploadFolder | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser;

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse';
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contains?: InputMaybe<Scalars['ID']['input']>;
  containsi?: InputMaybe<Scalars['ID']['input']>;
  endsWith?: InputMaybe<Scalars['ID']['input']>;
  eq?: InputMaybe<Scalars['ID']['input']>;
  eqi?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  gte?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  lte?: InputMaybe<Scalars['ID']['input']>;
  ne?: InputMaybe<Scalars['ID']['input']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']['input']>;
  notContainsi?: InputMaybe<Scalars['ID']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  startsWith?: InputMaybe<Scalars['ID']['input']>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  contains?: InputMaybe<Scalars['Int']['input']>;
  containsi?: InputMaybe<Scalars['Int']['input']>;
  endsWith?: InputMaybe<Scalars['Int']['input']>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  eqi?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']['input']>;
  notContainsi?: InputMaybe<Scalars['Int']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  startsWith?: InputMaybe<Scalars['Int']['input']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  contains?: InputMaybe<Scalars['JSON']['input']>;
  containsi?: InputMaybe<Scalars['JSON']['input']>;
  endsWith?: InputMaybe<Scalars['JSON']['input']>;
  eq?: InputMaybe<Scalars['JSON']['input']>;
  eqi?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  ne?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']['input']>;
  notContainsi?: InputMaybe<Scalars['JSON']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  startsWith?: InputMaybe<Scalars['JSON']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  createCargo?: Maybe<CargoEntityResponse>;
  createEstacione?: Maybe<EstacioneEntityResponse>;
  createObservacione?: Maybe<ObservacioneEntityResponse>;
  createPedido?: Maybe<PedidoEntityResponse>;
  createTurno?: Maybe<TurnoEntityResponse>;
  createUbicacione?: Maybe<UbicacioneEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  createUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteCargo?: Maybe<CargoEntityResponse>;
  deleteEstacione?: Maybe<EstacioneEntityResponse>;
  deleteObservacione?: Maybe<ObservacioneEntityResponse>;
  deletePedido?: Maybe<PedidoEntityResponse>;
  deleteTurno?: Maybe<TurnoEntityResponse>;
  deleteUbicacione?: Maybe<UbicacioneEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateCargo?: Maybe<CargoEntityResponse>;
  updateEstacione?: Maybe<EstacioneEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateObservacione?: Maybe<ObservacioneEntityResponse>;
  updatePedido?: Maybe<PedidoEntityResponse>;
  updateTurno?: Maybe<TurnoEntityResponse>;
  updateUbicacione?: Maybe<UbicacioneEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  upload: UploadFileEntityResponse;
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationCreateCargoArgs = {
  data: CargoInput;
};


export type MutationCreateEstacioneArgs = {
  data: EstacioneInput;
};


export type MutationCreateObservacioneArgs = {
  data: ObservacioneInput;
};


export type MutationCreatePedidoArgs = {
  data: PedidoInput;
};


export type MutationCreateTurnoArgs = {
  data: TurnoInput;
};


export type MutationCreateUbicacioneArgs = {
  data: UbicacioneInput;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationDeleteCargoArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteEstacioneArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteObservacioneArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePedidoArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteTurnoArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUbicacioneArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUploadFolderArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String']['input'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']['input']>;
  files: Array<InputMaybe<Scalars['Upload']['input']>>;
  ref?: InputMaybe<Scalars['String']['input']>;
  refId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationUpdateCargoArgs = {
  data: CargoInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateEstacioneArgs = {
  data: EstacioneInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID']['input'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateObservacioneArgs = {
  data: ObservacioneInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdatePedidoArgs = {
  data: PedidoInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateTurnoArgs = {
  data: TurnoInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUbicacioneArgs = {
  data: UbicacioneInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID']['input'];
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']['input']>;
  file: Scalars['Upload']['input'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']['input']>;
  refId?: InputMaybe<Scalars['ID']['input']>;
};

export type Observacione = {
  __typename?: 'Observacione';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  observacion?: Maybe<Scalars['String']['output']>;
  pedido?: Maybe<PedidoEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  users_permissions_user?: Maybe<UsersPermissionsUserEntityResponse>;
};

export type ObservacioneEntity = {
  __typename?: 'ObservacioneEntity';
  attributes?: Maybe<Observacione>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ObservacioneEntityResponse = {
  __typename?: 'ObservacioneEntityResponse';
  data?: Maybe<ObservacioneEntity>;
};

export type ObservacioneEntityResponseCollection = {
  __typename?: 'ObservacioneEntityResponseCollection';
  data: Array<ObservacioneEntity>;
  meta: ResponseCollectionMeta;
};

export type ObservacioneFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ObservacioneFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<ObservacioneFiltersInput>;
  observacion?: InputMaybe<StringFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ObservacioneFiltersInput>>>;
  pedido?: InputMaybe<PedidoFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users_permissions_user?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type ObservacioneInput = {
  observacion?: InputMaybe<Scalars['String']['input']>;
  pedido?: InputMaybe<Scalars['ID']['input']>;
  users_permissions_user?: InputMaybe<Scalars['ID']['input']>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int']['output'];
  pageCount: Scalars['Int']['output'];
  pageSize: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
};

export type Pedido = {
  __typename?: 'Pedido';
  cargo?: Maybe<CargoEntityResponse>;
  cliente?: Maybe<Scalars['String']['output']>;
  creadoPor?: Maybe<UsersPermissionsUserEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  cuantoTardoInicioFin?: Maybe<Scalars['String']['output']>;
  descripcion?: Maybe<Scalars['String']['output']>;
  estacionFin?: Maybe<Scalars['String']['output']>;
  estacionInicio?: Maybe<Scalars['String']['output']>;
  estado?: Maybe<Scalars['Boolean']['output']>;
  fecha?: Maybe<Scalars['String']['output']>;
  fechaFin?: Maybe<Scalars['String']['output']>;
  fehcaInicio?: Maybe<Scalars['String']['output']>;
  finalizado?: Maybe<Scalars['Boolean']['output']>;
  hora?: Maybe<Scalars['Time']['output']>;
  identificacion?: Maybe<Scalars['String']['output']>;
  nombrePedido?: Maybe<Scalars['String']['output']>;
  observacione?: Maybe<ObservacioneEntityResponse>;
  readDate?: Maybe<Scalars['String']['output']>;
  stage?: Maybe<Enum_Pedido_Stage>;
  tipoIdentificacion?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<UsersPermissionsUserEntityResponse>;
};

export type PedidoEntity = {
  __typename?: 'PedidoEntity';
  attributes?: Maybe<Pedido>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type PedidoEntityResponse = {
  __typename?: 'PedidoEntityResponse';
  data?: Maybe<PedidoEntity>;
};

export type PedidoEntityResponseCollection = {
  __typename?: 'PedidoEntityResponseCollection';
  data: Array<PedidoEntity>;
  meta: ResponseCollectionMeta;
};

export type PedidoFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<PedidoFiltersInput>>>;
  cargo?: InputMaybe<CargoFiltersInput>;
  cliente?: InputMaybe<StringFilterInput>;
  creadoPor?: InputMaybe<UsersPermissionsUserFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  cuantoTardoInicioFin?: InputMaybe<StringFilterInput>;
  descripcion?: InputMaybe<StringFilterInput>;
  estacionFin?: InputMaybe<StringFilterInput>;
  estacionInicio?: InputMaybe<StringFilterInput>;
  estado?: InputMaybe<BooleanFilterInput>;
  fecha?: InputMaybe<StringFilterInput>;
  fechaFin?: InputMaybe<StringFilterInput>;
  fehcaInicio?: InputMaybe<StringFilterInput>;
  finalizado?: InputMaybe<BooleanFilterInput>;
  hora?: InputMaybe<TimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  identificacion?: InputMaybe<StringFilterInput>;
  nombrePedido?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<PedidoFiltersInput>;
  observacione?: InputMaybe<ObservacioneFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<PedidoFiltersInput>>>;
  readDate?: InputMaybe<StringFilterInput>;
  stage?: InputMaybe<StringFilterInput>;
  tipoIdentificacion?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  user?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type PedidoInput = {
  cargo?: InputMaybe<Scalars['ID']['input']>;
  cliente?: InputMaybe<Scalars['String']['input']>;
  creadoPor?: InputMaybe<Scalars['ID']['input']>;
  cuantoTardoInicioFin?: InputMaybe<Scalars['String']['input']>;
  descripcion?: InputMaybe<Scalars['String']['input']>;
  estacionFin?: InputMaybe<Scalars['String']['input']>;
  estacionInicio?: InputMaybe<Scalars['String']['input']>;
  estado?: InputMaybe<Scalars['Boolean']['input']>;
  fecha?: InputMaybe<Scalars['String']['input']>;
  fechaFin?: InputMaybe<Scalars['String']['input']>;
  fehcaInicio?: InputMaybe<Scalars['String']['input']>;
  finalizado?: InputMaybe<Scalars['Boolean']['input']>;
  hora?: InputMaybe<Scalars['Time']['input']>;
  identificacion?: InputMaybe<Scalars['String']['input']>;
  nombrePedido?: InputMaybe<Scalars['String']['input']>;
  observacione?: InputMaybe<Scalars['ID']['input']>;
  readDate?: InputMaybe<Scalars['String']['input']>;
  stage?: InputMaybe<Enum_Pedido_Stage>;
  tipoIdentificacion?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Scalars['ID']['input']>;
};

export type PedidoRelationResponseCollection = {
  __typename?: 'PedidoRelationResponseCollection';
  data: Array<PedidoEntity>;
};

export type Query = {
  __typename?: 'Query';
  cargo?: Maybe<CargoEntityResponse>;
  cargos?: Maybe<CargoEntityResponseCollection>;
  estacione?: Maybe<EstacioneEntityResponse>;
  estaciones?: Maybe<EstacioneEntityResponseCollection>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  observacione?: Maybe<ObservacioneEntityResponse>;
  observaciones?: Maybe<ObservacioneEntityResponseCollection>;
  pedido?: Maybe<PedidoEntityResponse>;
  pedidos?: Maybe<PedidoEntityResponseCollection>;
  turno?: Maybe<TurnoEntityResponse>;
  turnos?: Maybe<TurnoEntityResponseCollection>;
  ubicacione?: Maybe<UbicacioneEntityResponse>;
  ubicaciones?: Maybe<UbicacioneEntityResponseCollection>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  uploadFolder?: Maybe<UploadFolderEntityResponse>;
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
};


export type QueryCargoArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryCargosArgs = {
  filters?: InputMaybe<CargoFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryEstacioneArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryEstacionesArgs = {
  filters?: InputMaybe<EstacioneFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryObservacioneArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryObservacionesArgs = {
  filters?: InputMaybe<ObservacioneFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryPedidoArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryPedidosArgs = {
  filters?: InputMaybe<PedidoFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryTurnoArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryTurnosArgs = {
  filters?: InputMaybe<TurnoFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUbicacioneArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUbicacionesArgs = {
  filters?: InputMaybe<UbicacioneFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUploadFolderArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUploadFoldersArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  containsi?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  eqi?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']['input']>;
  notContainsi?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type TimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Time']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Time']['input']>>>;
  contains?: InputMaybe<Scalars['Time']['input']>;
  containsi?: InputMaybe<Scalars['Time']['input']>;
  endsWith?: InputMaybe<Scalars['Time']['input']>;
  eq?: InputMaybe<Scalars['Time']['input']>;
  eqi?: InputMaybe<Scalars['Time']['input']>;
  gt?: InputMaybe<Scalars['Time']['input']>;
  gte?: InputMaybe<Scalars['Time']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Time']['input']>>>;
  lt?: InputMaybe<Scalars['Time']['input']>;
  lte?: InputMaybe<Scalars['Time']['input']>;
  ne?: InputMaybe<Scalars['Time']['input']>;
  not?: InputMaybe<TimeFilterInput>;
  notContains?: InputMaybe<Scalars['Time']['input']>;
  notContainsi?: InputMaybe<Scalars['Time']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Time']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Time']['input']>>>;
  startsWith?: InputMaybe<Scalars['Time']['input']>;
};

export type Turno = {
  __typename?: 'Turno';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  fin?: Maybe<Scalars['DateTime']['output']>;
  inicio?: Maybe<Scalars['DateTime']['output']>;
  nombre?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type TurnoEntity = {
  __typename?: 'TurnoEntity';
  attributes?: Maybe<Turno>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type TurnoEntityResponse = {
  __typename?: 'TurnoEntityResponse';
  data?: Maybe<TurnoEntity>;
};

export type TurnoEntityResponseCollection = {
  __typename?: 'TurnoEntityResponseCollection';
  data: Array<TurnoEntity>;
  meta: ResponseCollectionMeta;
};

export type TurnoFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<TurnoFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  fin?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  inicio?: InputMaybe<DateTimeFilterInput>;
  nombre?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<TurnoFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<TurnoFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type TurnoInput = {
  fin?: InputMaybe<Scalars['DateTime']['input']>;
  inicio?: InputMaybe<Scalars['DateTime']['input']>;
  nombre?: InputMaybe<Scalars['String']['input']>;
};

export type TurnoRelationResponseCollection = {
  __typename?: 'TurnoRelationResponseCollection';
  data: Array<TurnoEntity>;
};

export type Ubicacione = {
  __typename?: 'Ubicacione';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  users_permissions_user?: Maybe<UsersPermissionsUserEntityResponse>;
};

export type UbicacioneEntity = {
  __typename?: 'UbicacioneEntity';
  attributes?: Maybe<Ubicacione>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UbicacioneEntityResponse = {
  __typename?: 'UbicacioneEntityResponse';
  data?: Maybe<UbicacioneEntity>;
};

export type UbicacioneEntityResponseCollection = {
  __typename?: 'UbicacioneEntityResponseCollection';
  data: Array<UbicacioneEntity>;
  meta: ResponseCollectionMeta;
};

export type UbicacioneFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UbicacioneFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UbicacioneFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UbicacioneFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users_permissions_user?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UbicacioneInput = {
  users_permissions_user?: InputMaybe<Scalars['ID']['input']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']['output']>;
  caption?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  ext?: Maybe<Scalars['String']['output']>;
  formats?: Maybe<Scalars['JSON']['output']>;
  hash: Scalars['String']['output'];
  height?: Maybe<Scalars['Int']['output']>;
  mime: Scalars['String']['output'];
  name: Scalars['String']['output'];
  previewUrl?: Maybe<Scalars['String']['output']>;
  provider: Scalars['String']['output'];
  provider_metadata?: Maybe<Scalars['JSON']['output']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url: Scalars['String']['output'];
  width?: Maybe<Scalars['Int']['output']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  folder?: InputMaybe<UploadFolderFiltersInput>;
  folderPath?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  ext?: InputMaybe<Scalars['String']['input']>;
  folder?: InputMaybe<Scalars['ID']['input']>;
  folderPath?: InputMaybe<Scalars['String']['input']>;
  formats?: InputMaybe<Scalars['JSON']['input']>;
  hash?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  mime?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  previewUrl?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  provider_metadata?: InputMaybe<Scalars['JSON']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  data: Array<UploadFileEntity>;
};

export type UploadFolder = {
  __typename?: 'UploadFolder';
  children?: Maybe<UploadFolderRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  files?: Maybe<UploadFileRelationResponseCollection>;
  name: Scalars['String']['output'];
  parent?: Maybe<UploadFolderEntityResponse>;
  path: Scalars['String']['output'];
  pathId: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type UploadFolderChildrenArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UploadFolderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UploadFolderEntity = {
  __typename?: 'UploadFolderEntity';
  attributes?: Maybe<UploadFolder>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UploadFolderEntityResponse = {
  __typename?: 'UploadFolderEntityResponse';
  data?: Maybe<UploadFolderEntity>;
};

export type UploadFolderEntityResponseCollection = {
  __typename?: 'UploadFolderEntityResponseCollection';
  data: Array<UploadFolderEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFolderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  children?: InputMaybe<UploadFolderFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  files?: InputMaybe<UploadFileFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFolderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  parent?: InputMaybe<UploadFolderFiltersInput>;
  path?: InputMaybe<StringFilterInput>;
  pathId?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UploadFolderInput = {
  children?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  files?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  pathId?: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFolderRelationResponseCollection = {
  __typename?: 'UploadFolderRelationResponseCollection';
  data: Array<UploadFolderEntity>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String']['input'];
  password: Scalars['String']['input'];
  provider?: Scalars['String']['input'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']['output']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  type?: Maybe<Scalars['String']['output']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  type?: InputMaybe<Scalars['String']['input']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  Area?: Maybe<Scalars['String']['output']>;
  blocked?: Maybe<Scalars['Boolean']['output']>;
  cargo?: Maybe<CargoEntityResponse>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  enlinea?: Maybe<Scalars['Boolean']['output']>;
  nombreCompleto?: Maybe<Scalars['String']['output']>;
  observacione?: Maybe<ObservacioneEntityResponse>;
  pedidos?: Maybe<PedidoRelationResponseCollection>;
  pedidosCreados?: Maybe<PedidoRelationResponseCollection>;
  provider?: Maybe<Scalars['String']['output']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  turnos?: Maybe<TurnoRelationResponseCollection>;
  ubicacionActual?: Maybe<Scalars['String']['output']>;
  ubicacione?: Maybe<UbicacioneEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  username: Scalars['String']['output'];
};


export type UsersPermissionsUserPedidosArgs = {
  filters?: InputMaybe<PedidoFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsUserPedidosCreadosArgs = {
  filters?: InputMaybe<PedidoFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsUserTurnosArgs = {
  filters?: InputMaybe<TurnoFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  Area?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  cargo?: InputMaybe<CargoFiltersInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  enlinea?: InputMaybe<BooleanFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  nombreCompleto?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  observacione?: InputMaybe<ObservacioneFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  pedidos?: InputMaybe<PedidoFiltersInput>;
  pedidosCreados?: InputMaybe<PedidoFiltersInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  turnos?: InputMaybe<TurnoFiltersInput>;
  ubicacionActual?: InputMaybe<StringFilterInput>;
  ubicacione?: InputMaybe<UbicacioneFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  Area?: InputMaybe<Scalars['String']['input']>;
  blocked?: InputMaybe<Scalars['Boolean']['input']>;
  cargo?: InputMaybe<Scalars['ID']['input']>;
  confirmationToken?: InputMaybe<Scalars['String']['input']>;
  confirmed?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  enlinea?: InputMaybe<Scalars['Boolean']['input']>;
  nombreCompleto?: InputMaybe<Scalars['String']['input']>;
  observacione?: InputMaybe<Scalars['ID']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  pedidos?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  pedidosCreados?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  provider?: InputMaybe<Scalars['String']['input']>;
  resetPasswordToken?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['ID']['input']>;
  turnos?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  ubicacionActual?: InputMaybe<Scalars['String']['input']>;
  ubicacione?: InputMaybe<Scalars['ID']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};

export type LoginMutationVariables = Exact<{
  input: UsersPermissionsLoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'UsersPermissionsLoginPayload', jwt?: string | null, user: { __typename?: 'UsersPermissionsMe', id: string, username: string, email?: string | null, confirmed?: boolean | null, blocked?: boolean | null } } };

export type CreateCargoMutationVariables = Exact<{
  data: CargoInput;
}>;


export type CreateCargoMutation = { __typename?: 'Mutation', createCargo?: { __typename?: 'CargoEntityResponse', data?: { __typename?: 'CargoEntity', id?: string | null } | null } | null };

export type DeleteCargoMutationVariables = Exact<{
  deleteCargoId: Scalars['ID']['input'];
}>;


export type DeleteCargoMutation = { __typename?: 'Mutation', deleteCargo?: { __typename?: 'CargoEntityResponse', data?: { __typename?: 'CargoEntity', id?: string | null } | null } | null };

export type UpdateCargoMutationVariables = Exact<{
  updateCargoId: Scalars['ID']['input'];
  data: CargoInput;
}>;


export type UpdateCargoMutation = { __typename?: 'Mutation', updateCargo?: { __typename?: 'CargoEntityResponse', data?: { __typename?: 'CargoEntity', id?: string | null } | null } | null };

export type CreateEstacioneMutationVariables = Exact<{
  data: EstacioneInput;
}>;


export type CreateEstacioneMutation = { __typename?: 'Mutation', createEstacione?: { __typename?: 'EstacioneEntityResponse', data?: { __typename?: 'EstacioneEntity', id?: string | null } | null } | null };

export type DeleteEstacioneMutationVariables = Exact<{
  deleteEstacioneId: Scalars['ID']['input'];
}>;


export type DeleteEstacioneMutation = { __typename?: 'Mutation', deleteEstacione?: { __typename?: 'EstacioneEntityResponse', data?: { __typename?: 'EstacioneEntity', id?: string | null } | null } | null };

export type UpdateEstacioneMutationVariables = Exact<{
  updateEstacioneId: Scalars['ID']['input'];
  data: EstacioneInput;
}>;


export type UpdateEstacioneMutation = { __typename?: 'Mutation', updateEstacione?: { __typename?: 'EstacioneEntityResponse', data?: { __typename?: 'EstacioneEntity', id?: string | null } | null } | null };

export type CreatePedidoMutationVariables = Exact<{
  data: PedidoInput;
}>;


export type CreatePedidoMutation = { __typename?: 'Mutation', createPedido?: { __typename?: 'PedidoEntityResponse', data?: { __typename?: 'PedidoEntity', id?: string | null } | null } | null };

export type DeletePedidoMutationVariables = Exact<{
  deletePedidoId: Scalars['ID']['input'];
}>;


export type DeletePedidoMutation = { __typename?: 'Mutation', deletePedido?: { __typename?: 'PedidoEntityResponse', data?: { __typename?: 'PedidoEntity', id?: string | null } | null } | null };

export type UpdatePedidoMutationVariables = Exact<{
  updatePedidoId: Scalars['ID']['input'];
  data: PedidoInput;
}>;


export type UpdatePedidoMutation = { __typename?: 'Mutation', updatePedido?: { __typename?: 'PedidoEntityResponse', data?: { __typename?: 'PedidoEntity', id?: string | null } | null } | null };

export type CreateUsersPermissionsUserMutationVariables = Exact<{
  data: UsersPermissionsUserInput;
}>;


export type CreateUsersPermissionsUserMutation = { __typename?: 'Mutation', createUsersPermissionsUser: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', id?: string | null } | null } };

export type DeleteUsersPermissionsUserMutationVariables = Exact<{
  deleteUsersPermissionsUserId: Scalars['ID']['input'];
}>;


export type DeleteUsersPermissionsUserMutation = { __typename?: 'Mutation', deleteUsersPermissionsUser: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', id?: string | null } | null } };

export type UpdateUsersPermissionsUserMutationVariables = Exact<{
  updateUsersPermissionsUserId: Scalars['ID']['input'];
  data: UsersPermissionsUserInput;
}>;


export type UpdateUsersPermissionsUserMutation = { __typename?: 'Mutation', updateUsersPermissionsUser: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', id?: string | null } | null } };

export type CargoQueryVariables = Exact<{
  cargoId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type CargoQuery = { __typename?: 'Query', cargo?: { __typename?: 'CargoEntityResponse', data?: { __typename?: 'CargoEntity', id?: string | null, attributes?: { __typename?: 'Cargo', nombre?: string | null, estado?: boolean | null, createdAt?: any | null, updatedAt?: any | null } | null } | null } | null };

export type CargosQueryVariables = Exact<{
  pagination?: InputMaybe<PaginationArg>;
}>;


export type CargosQuery = { __typename?: 'Query', cargos?: { __typename?: 'CargoEntityResponseCollection', data: Array<{ __typename?: 'CargoEntity', id?: string | null, attributes?: { __typename?: 'Cargo', nombre?: string | null, estado?: boolean | null, createdAt?: any | null, updatedAt?: any | null } | null }>, meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number } } } | null };

export type EstacionesQueryVariables = Exact<{
  pagination?: InputMaybe<PaginationArg>;
}>;


export type EstacionesQuery = { __typename?: 'Query', estaciones?: { __typename?: 'EstacioneEntityResponseCollection', data: Array<{ __typename?: 'EstacioneEntity', id?: string | null, attributes?: { __typename?: 'Estacione', nombre?: string | null, codigoNFC?: string | null, createdAt?: any | null, updatedAt?: any | null } | null }>, meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number } } } | null };

export type PedidoQueryVariables = Exact<{
  pedidoId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type PedidoQuery = { __typename?: 'Query', pedido?: { __typename?: 'PedidoEntityResponse', data?: { __typename?: 'PedidoEntity', id?: string | null, attributes?: { __typename?: 'Pedido', nombrePedido?: string | null, descripcion?: string | null, cliente?: string | null, hora?: any | null, estacionInicio?: string | null, estacionFin?: string | null, cuantoTardoInicioFin?: string | null, estado?: boolean | null, fehcaInicio?: string | null, fechaFin?: string | null, fecha?: string | null, createdAt?: any | null, updatedAt?: any | null, tipoIdentificacion?: string | null, identificacion?: string | null, cargo?: { __typename?: 'CargoEntityResponse', data?: { __typename?: 'CargoEntity', id?: string | null, attributes?: { __typename?: 'Cargo', nombre?: string | null } | null } | null } | null, creadoPor?: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', id?: string | null, attributes?: { __typename?: 'UsersPermissionsUser', email: string, username: string, nombreCompleto?: string | null } | null } | null } | null } | null } | null } | null };

export type PedidosQueryVariables = Exact<{
  filters?: InputMaybe<PedidoFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
}>;


export type PedidosQuery = { __typename?: 'Query', pedidos?: { __typename?: 'PedidoEntityResponseCollection', meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number } }, data: Array<{ __typename?: 'PedidoEntity', id?: string | null, attributes?: { __typename?: 'Pedido', nombrePedido?: string | null, descripcion?: string | null, cliente?: string | null, hora?: any | null, estacionInicio?: string | null, estacionFin?: string | null, cuantoTardoInicioFin?: string | null, tipoIdentificacion?: string | null, identificacion?: string | null, estado?: boolean | null, fehcaInicio?: string | null, fechaFin?: string | null, fecha?: string | null, stage?: Enum_Pedido_Stage | null, createdAt?: any | null, updatedAt?: any | null, cargo?: { __typename?: 'CargoEntityResponse', data?: { __typename?: 'CargoEntity', id?: string | null, attributes?: { __typename?: 'Cargo', nombre?: string | null } | null } | null } | null, user?: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', id?: string | null, attributes?: { __typename?: 'UsersPermissionsUser', email: string, username: string, nombreCompleto?: string | null } | null } | null } | null, creadoPor?: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', id?: string | null, attributes?: { __typename?: 'UsersPermissionsUser', email: string, username: string, nombreCompleto?: string | null } | null } | null } | null } | null }> } | null };

export type UsersPermissionsUserQueryVariables = Exact<{
  usersPermissionsUserId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type UsersPermissionsUserQuery = { __typename?: 'Query', usersPermissionsUser?: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', attributes?: { __typename?: 'UsersPermissionsUser', username: string, enlinea?: boolean | null, email: string, nombreCompleto?: string | null, Area?: string | null, cargo?: { __typename?: 'CargoEntityResponse', data?: { __typename?: 'CargoEntity', id?: string | null, attributes?: { __typename?: 'Cargo', nombre?: string | null } | null } | null } | null, pedidos?: { __typename?: 'PedidoRelationResponseCollection', data: Array<{ __typename?: 'PedidoEntity', id?: string | null, attributes?: { __typename?: 'Pedido', nombrePedido?: string | null, descripcion?: string | null, cliente?: string | null, fecha?: string | null, hora?: any | null, estacionInicio?: string | null, estacionFin?: string | null, fehcaInicio?: string | null, fechaFin?: string | null, cuantoTardoInicioFin?: string | null, estado?: boolean | null, identificacion?: string | null, tipoIdentificacion?: string | null, finalizado?: boolean | null } | null }> } | null, turnos?: { __typename?: 'TurnoRelationResponseCollection', data: Array<{ __typename?: 'TurnoEntity', attributes?: { __typename?: 'Turno', fin?: any | null, inicio?: any | null, nombre?: string | null } | null }> } | null } | null } | null } | null };

export type UsersPermissionsUsersQueryVariables = Exact<{
  pagination?: InputMaybe<PaginationArg>;
}>;


export type UsersPermissionsUsersQuery = { __typename?: 'Query', usersPermissionsUsers?: { __typename?: 'UsersPermissionsUserEntityResponseCollection', data: Array<{ __typename?: 'UsersPermissionsUserEntity', id?: string | null, attributes?: { __typename?: 'UsersPermissionsUser', username: string, enlinea?: boolean | null, email: string, provider?: string | null, confirmed?: boolean | null, blocked?: boolean | null, nombreCompleto?: string | null, Area?: string | null, createdAt?: any | null, updatedAt?: any | null, cargo?: { __typename?: 'CargoEntityResponse', data?: { __typename?: 'CargoEntity', attributes?: { __typename?: 'Cargo', nombre?: string | null } | null } | null } | null } | null }>, meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number } } } | null };


export const LoginDocument = gql`
    mutation Login($input: UsersPermissionsLoginInput!) {
  login(input: $input) {
    jwt
    user {
      id
      username
      email
      confirmed
      blocked
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const CreateCargoDocument = gql`
    mutation CreateCargo($data: CargoInput!) {
  createCargo(data: $data) {
    data {
      id
    }
  }
}
    `;
export type CreateCargoMutationFn = Apollo.MutationFunction<CreateCargoMutation, CreateCargoMutationVariables>;

/**
 * __useCreateCargoMutation__
 *
 * To run a mutation, you first call `useCreateCargoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCargoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCargoMutation, { data, loading, error }] = useCreateCargoMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateCargoMutation(baseOptions?: Apollo.MutationHookOptions<CreateCargoMutation, CreateCargoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCargoMutation, CreateCargoMutationVariables>(CreateCargoDocument, options);
      }
export type CreateCargoMutationHookResult = ReturnType<typeof useCreateCargoMutation>;
export type CreateCargoMutationResult = Apollo.MutationResult<CreateCargoMutation>;
export type CreateCargoMutationOptions = Apollo.BaseMutationOptions<CreateCargoMutation, CreateCargoMutationVariables>;
export const DeleteCargoDocument = gql`
    mutation DeleteCargo($deleteCargoId: ID!) {
  deleteCargo(id: $deleteCargoId) {
    data {
      id
    }
  }
}
    `;
export type DeleteCargoMutationFn = Apollo.MutationFunction<DeleteCargoMutation, DeleteCargoMutationVariables>;

/**
 * __useDeleteCargoMutation__
 *
 * To run a mutation, you first call `useDeleteCargoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCargoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCargoMutation, { data, loading, error }] = useDeleteCargoMutation({
 *   variables: {
 *      deleteCargoId: // value for 'deleteCargoId'
 *   },
 * });
 */
export function useDeleteCargoMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCargoMutation, DeleteCargoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteCargoMutation, DeleteCargoMutationVariables>(DeleteCargoDocument, options);
      }
export type DeleteCargoMutationHookResult = ReturnType<typeof useDeleteCargoMutation>;
export type DeleteCargoMutationResult = Apollo.MutationResult<DeleteCargoMutation>;
export type DeleteCargoMutationOptions = Apollo.BaseMutationOptions<DeleteCargoMutation, DeleteCargoMutationVariables>;
export const UpdateCargoDocument = gql`
    mutation UpdateCargo($updateCargoId: ID!, $data: CargoInput!) {
  updateCargo(id: $updateCargoId, data: $data) {
    data {
      id
    }
  }
}
    `;
export type UpdateCargoMutationFn = Apollo.MutationFunction<UpdateCargoMutation, UpdateCargoMutationVariables>;

/**
 * __useUpdateCargoMutation__
 *
 * To run a mutation, you first call `useUpdateCargoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCargoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCargoMutation, { data, loading, error }] = useUpdateCargoMutation({
 *   variables: {
 *      updateCargoId: // value for 'updateCargoId'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateCargoMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCargoMutation, UpdateCargoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCargoMutation, UpdateCargoMutationVariables>(UpdateCargoDocument, options);
      }
export type UpdateCargoMutationHookResult = ReturnType<typeof useUpdateCargoMutation>;
export type UpdateCargoMutationResult = Apollo.MutationResult<UpdateCargoMutation>;
export type UpdateCargoMutationOptions = Apollo.BaseMutationOptions<UpdateCargoMutation, UpdateCargoMutationVariables>;
export const CreateEstacioneDocument = gql`
    mutation CreateEstacione($data: EstacioneInput!) {
  createEstacione(data: $data) {
    data {
      id
    }
  }
}
    `;
export type CreateEstacioneMutationFn = Apollo.MutationFunction<CreateEstacioneMutation, CreateEstacioneMutationVariables>;

/**
 * __useCreateEstacioneMutation__
 *
 * To run a mutation, you first call `useCreateEstacioneMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateEstacioneMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createEstacioneMutation, { data, loading, error }] = useCreateEstacioneMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateEstacioneMutation(baseOptions?: Apollo.MutationHookOptions<CreateEstacioneMutation, CreateEstacioneMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateEstacioneMutation, CreateEstacioneMutationVariables>(CreateEstacioneDocument, options);
      }
export type CreateEstacioneMutationHookResult = ReturnType<typeof useCreateEstacioneMutation>;
export type CreateEstacioneMutationResult = Apollo.MutationResult<CreateEstacioneMutation>;
export type CreateEstacioneMutationOptions = Apollo.BaseMutationOptions<CreateEstacioneMutation, CreateEstacioneMutationVariables>;
export const DeleteEstacioneDocument = gql`
    mutation DeleteEstacione($deleteEstacioneId: ID!) {
  deleteEstacione(id: $deleteEstacioneId) {
    data {
      id
    }
  }
}
    `;
export type DeleteEstacioneMutationFn = Apollo.MutationFunction<DeleteEstacioneMutation, DeleteEstacioneMutationVariables>;

/**
 * __useDeleteEstacioneMutation__
 *
 * To run a mutation, you first call `useDeleteEstacioneMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteEstacioneMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteEstacioneMutation, { data, loading, error }] = useDeleteEstacioneMutation({
 *   variables: {
 *      deleteEstacioneId: // value for 'deleteEstacioneId'
 *   },
 * });
 */
export function useDeleteEstacioneMutation(baseOptions?: Apollo.MutationHookOptions<DeleteEstacioneMutation, DeleteEstacioneMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteEstacioneMutation, DeleteEstacioneMutationVariables>(DeleteEstacioneDocument, options);
      }
export type DeleteEstacioneMutationHookResult = ReturnType<typeof useDeleteEstacioneMutation>;
export type DeleteEstacioneMutationResult = Apollo.MutationResult<DeleteEstacioneMutation>;
export type DeleteEstacioneMutationOptions = Apollo.BaseMutationOptions<DeleteEstacioneMutation, DeleteEstacioneMutationVariables>;
export const UpdateEstacioneDocument = gql`
    mutation UpdateEstacione($updateEstacioneId: ID!, $data: EstacioneInput!) {
  updateEstacione(id: $updateEstacioneId, data: $data) {
    data {
      id
    }
  }
}
    `;
export type UpdateEstacioneMutationFn = Apollo.MutationFunction<UpdateEstacioneMutation, UpdateEstacioneMutationVariables>;

/**
 * __useUpdateEstacioneMutation__
 *
 * To run a mutation, you first call `useUpdateEstacioneMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateEstacioneMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateEstacioneMutation, { data, loading, error }] = useUpdateEstacioneMutation({
 *   variables: {
 *      updateEstacioneId: // value for 'updateEstacioneId'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateEstacioneMutation(baseOptions?: Apollo.MutationHookOptions<UpdateEstacioneMutation, UpdateEstacioneMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateEstacioneMutation, UpdateEstacioneMutationVariables>(UpdateEstacioneDocument, options);
      }
export type UpdateEstacioneMutationHookResult = ReturnType<typeof useUpdateEstacioneMutation>;
export type UpdateEstacioneMutationResult = Apollo.MutationResult<UpdateEstacioneMutation>;
export type UpdateEstacioneMutationOptions = Apollo.BaseMutationOptions<UpdateEstacioneMutation, UpdateEstacioneMutationVariables>;
export const CreatePedidoDocument = gql`
    mutation CreatePedido($data: PedidoInput!) {
  createPedido(data: $data) {
    data {
      id
    }
  }
}
    `;
export type CreatePedidoMutationFn = Apollo.MutationFunction<CreatePedidoMutation, CreatePedidoMutationVariables>;

/**
 * __useCreatePedidoMutation__
 *
 * To run a mutation, you first call `useCreatePedidoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePedidoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPedidoMutation, { data, loading, error }] = useCreatePedidoMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreatePedidoMutation(baseOptions?: Apollo.MutationHookOptions<CreatePedidoMutation, CreatePedidoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePedidoMutation, CreatePedidoMutationVariables>(CreatePedidoDocument, options);
      }
export type CreatePedidoMutationHookResult = ReturnType<typeof useCreatePedidoMutation>;
export type CreatePedidoMutationResult = Apollo.MutationResult<CreatePedidoMutation>;
export type CreatePedidoMutationOptions = Apollo.BaseMutationOptions<CreatePedidoMutation, CreatePedidoMutationVariables>;
export const DeletePedidoDocument = gql`
    mutation DeletePedido($deletePedidoId: ID!) {
  deletePedido(id: $deletePedidoId) {
    data {
      id
    }
  }
}
    `;
export type DeletePedidoMutationFn = Apollo.MutationFunction<DeletePedidoMutation, DeletePedidoMutationVariables>;

/**
 * __useDeletePedidoMutation__
 *
 * To run a mutation, you first call `useDeletePedidoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePedidoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePedidoMutation, { data, loading, error }] = useDeletePedidoMutation({
 *   variables: {
 *      deletePedidoId: // value for 'deletePedidoId'
 *   },
 * });
 */
export function useDeletePedidoMutation(baseOptions?: Apollo.MutationHookOptions<DeletePedidoMutation, DeletePedidoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeletePedidoMutation, DeletePedidoMutationVariables>(DeletePedidoDocument, options);
      }
export type DeletePedidoMutationHookResult = ReturnType<typeof useDeletePedidoMutation>;
export type DeletePedidoMutationResult = Apollo.MutationResult<DeletePedidoMutation>;
export type DeletePedidoMutationOptions = Apollo.BaseMutationOptions<DeletePedidoMutation, DeletePedidoMutationVariables>;
export const UpdatePedidoDocument = gql`
    mutation UpdatePedido($updatePedidoId: ID!, $data: PedidoInput!) {
  updatePedido(id: $updatePedidoId, data: $data) {
    data {
      id
    }
  }
}
    `;
export type UpdatePedidoMutationFn = Apollo.MutationFunction<UpdatePedidoMutation, UpdatePedidoMutationVariables>;

/**
 * __useUpdatePedidoMutation__
 *
 * To run a mutation, you first call `useUpdatePedidoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePedidoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePedidoMutation, { data, loading, error }] = useUpdatePedidoMutation({
 *   variables: {
 *      updatePedidoId: // value for 'updatePedidoId'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdatePedidoMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePedidoMutation, UpdatePedidoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePedidoMutation, UpdatePedidoMutationVariables>(UpdatePedidoDocument, options);
      }
export type UpdatePedidoMutationHookResult = ReturnType<typeof useUpdatePedidoMutation>;
export type UpdatePedidoMutationResult = Apollo.MutationResult<UpdatePedidoMutation>;
export type UpdatePedidoMutationOptions = Apollo.BaseMutationOptions<UpdatePedidoMutation, UpdatePedidoMutationVariables>;
export const CreateUsersPermissionsUserDocument = gql`
    mutation CreateUsersPermissionsUser($data: UsersPermissionsUserInput!) {
  createUsersPermissionsUser(data: $data) {
    data {
      id
    }
  }
}
    `;
export type CreateUsersPermissionsUserMutationFn = Apollo.MutationFunction<CreateUsersPermissionsUserMutation, CreateUsersPermissionsUserMutationVariables>;

/**
 * __useCreateUsersPermissionsUserMutation__
 *
 * To run a mutation, you first call `useCreateUsersPermissionsUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUsersPermissionsUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUsersPermissionsUserMutation, { data, loading, error }] = useCreateUsersPermissionsUserMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateUsersPermissionsUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUsersPermissionsUserMutation, CreateUsersPermissionsUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUsersPermissionsUserMutation, CreateUsersPermissionsUserMutationVariables>(CreateUsersPermissionsUserDocument, options);
      }
export type CreateUsersPermissionsUserMutationHookResult = ReturnType<typeof useCreateUsersPermissionsUserMutation>;
export type CreateUsersPermissionsUserMutationResult = Apollo.MutationResult<CreateUsersPermissionsUserMutation>;
export type CreateUsersPermissionsUserMutationOptions = Apollo.BaseMutationOptions<CreateUsersPermissionsUserMutation, CreateUsersPermissionsUserMutationVariables>;
export const DeleteUsersPermissionsUserDocument = gql`
    mutation DeleteUsersPermissionsUser($deleteUsersPermissionsUserId: ID!) {
  deleteUsersPermissionsUser(id: $deleteUsersPermissionsUserId) {
    data {
      id
    }
  }
}
    `;
export type DeleteUsersPermissionsUserMutationFn = Apollo.MutationFunction<DeleteUsersPermissionsUserMutation, DeleteUsersPermissionsUserMutationVariables>;

/**
 * __useDeleteUsersPermissionsUserMutation__
 *
 * To run a mutation, you first call `useDeleteUsersPermissionsUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUsersPermissionsUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUsersPermissionsUserMutation, { data, loading, error }] = useDeleteUsersPermissionsUserMutation({
 *   variables: {
 *      deleteUsersPermissionsUserId: // value for 'deleteUsersPermissionsUserId'
 *   },
 * });
 */
export function useDeleteUsersPermissionsUserMutation(baseOptions?: Apollo.MutationHookOptions<DeleteUsersPermissionsUserMutation, DeleteUsersPermissionsUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteUsersPermissionsUserMutation, DeleteUsersPermissionsUserMutationVariables>(DeleteUsersPermissionsUserDocument, options);
      }
export type DeleteUsersPermissionsUserMutationHookResult = ReturnType<typeof useDeleteUsersPermissionsUserMutation>;
export type DeleteUsersPermissionsUserMutationResult = Apollo.MutationResult<DeleteUsersPermissionsUserMutation>;
export type DeleteUsersPermissionsUserMutationOptions = Apollo.BaseMutationOptions<DeleteUsersPermissionsUserMutation, DeleteUsersPermissionsUserMutationVariables>;
export const UpdateUsersPermissionsUserDocument = gql`
    mutation UpdateUsersPermissionsUser($updateUsersPermissionsUserId: ID!, $data: UsersPermissionsUserInput!) {
  updateUsersPermissionsUser(id: $updateUsersPermissionsUserId, data: $data) {
    data {
      id
    }
  }
}
    `;
export type UpdateUsersPermissionsUserMutationFn = Apollo.MutationFunction<UpdateUsersPermissionsUserMutation, UpdateUsersPermissionsUserMutationVariables>;

/**
 * __useUpdateUsersPermissionsUserMutation__
 *
 * To run a mutation, you first call `useUpdateUsersPermissionsUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUsersPermissionsUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUsersPermissionsUserMutation, { data, loading, error }] = useUpdateUsersPermissionsUserMutation({
 *   variables: {
 *      updateUsersPermissionsUserId: // value for 'updateUsersPermissionsUserId'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateUsersPermissionsUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUsersPermissionsUserMutation, UpdateUsersPermissionsUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUsersPermissionsUserMutation, UpdateUsersPermissionsUserMutationVariables>(UpdateUsersPermissionsUserDocument, options);
      }
export type UpdateUsersPermissionsUserMutationHookResult = ReturnType<typeof useUpdateUsersPermissionsUserMutation>;
export type UpdateUsersPermissionsUserMutationResult = Apollo.MutationResult<UpdateUsersPermissionsUserMutation>;
export type UpdateUsersPermissionsUserMutationOptions = Apollo.BaseMutationOptions<UpdateUsersPermissionsUserMutation, UpdateUsersPermissionsUserMutationVariables>;
export const CargoDocument = gql`
    query Cargo($cargoId: ID) {
  cargo(id: $cargoId) {
    data {
      id
      attributes {
        nombre
        estado
        createdAt
        updatedAt
      }
      id
    }
  }
}
    `;

/**
 * __useCargoQuery__
 *
 * To run a query within a React component, call `useCargoQuery` and pass it any options that fit your needs.
 * When your component renders, `useCargoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCargoQuery({
 *   variables: {
 *      cargoId: // value for 'cargoId'
 *   },
 * });
 */
export function useCargoQuery(baseOptions?: Apollo.QueryHookOptions<CargoQuery, CargoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CargoQuery, CargoQueryVariables>(CargoDocument, options);
      }
export function useCargoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CargoQuery, CargoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CargoQuery, CargoQueryVariables>(CargoDocument, options);
        }
export type CargoQueryHookResult = ReturnType<typeof useCargoQuery>;
export type CargoLazyQueryHookResult = ReturnType<typeof useCargoLazyQuery>;
export type CargoQueryResult = Apollo.QueryResult<CargoQuery, CargoQueryVariables>;
export const CargosDocument = gql`
    query Cargos($pagination: PaginationArg) {
  cargos(pagination: $pagination) {
    data {
      id
      attributes {
        nombre
        estado
        createdAt
        updatedAt
      }
      id
    }
    meta {
      pagination {
        total
      }
    }
  }
}
    `;

/**
 * __useCargosQuery__
 *
 * To run a query within a React component, call `useCargosQuery` and pass it any options that fit your needs.
 * When your component renders, `useCargosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCargosQuery({
 *   variables: {
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useCargosQuery(baseOptions?: Apollo.QueryHookOptions<CargosQuery, CargosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CargosQuery, CargosQueryVariables>(CargosDocument, options);
      }
export function useCargosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CargosQuery, CargosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CargosQuery, CargosQueryVariables>(CargosDocument, options);
        }
export type CargosQueryHookResult = ReturnType<typeof useCargosQuery>;
export type CargosLazyQueryHookResult = ReturnType<typeof useCargosLazyQuery>;
export type CargosQueryResult = Apollo.QueryResult<CargosQuery, CargosQueryVariables>;
export const EstacionesDocument = gql`
    query Estaciones($pagination: PaginationArg) {
  estaciones(pagination: $pagination) {
    data {
      id
      attributes {
        nombre
        codigoNFC
        createdAt
        updatedAt
      }
    }
    meta {
      pagination {
        total
      }
    }
  }
}
    `;

/**
 * __useEstacionesQuery__
 *
 * To run a query within a React component, call `useEstacionesQuery` and pass it any options that fit your needs.
 * When your component renders, `useEstacionesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEstacionesQuery({
 *   variables: {
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useEstacionesQuery(baseOptions?: Apollo.QueryHookOptions<EstacionesQuery, EstacionesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<EstacionesQuery, EstacionesQueryVariables>(EstacionesDocument, options);
      }
export function useEstacionesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EstacionesQuery, EstacionesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<EstacionesQuery, EstacionesQueryVariables>(EstacionesDocument, options);
        }
export type EstacionesQueryHookResult = ReturnType<typeof useEstacionesQuery>;
export type EstacionesLazyQueryHookResult = ReturnType<typeof useEstacionesLazyQuery>;
export type EstacionesQueryResult = Apollo.QueryResult<EstacionesQuery, EstacionesQueryVariables>;
export const PedidoDocument = gql`
    query Pedido($pedidoId: ID) {
  pedido(id: $pedidoId) {
    data {
      id
      attributes {
        cargo {
          data {
            id
            attributes {
              nombre
            }
          }
        }
        nombrePedido
        descripcion
        cliente
        hora
        estacionInicio
        estacionFin
        cuantoTardoInicioFin
        estado
        fehcaInicio
        fechaFin
        fecha
        createdAt
        updatedAt
        tipoIdentificacion
        identificacion
        creadoPor {
          data {
            id
            attributes {
              email
              username
              nombreCompleto
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __usePedidoQuery__
 *
 * To run a query within a React component, call `usePedidoQuery` and pass it any options that fit your needs.
 * When your component renders, `usePedidoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePedidoQuery({
 *   variables: {
 *      pedidoId: // value for 'pedidoId'
 *   },
 * });
 */
export function usePedidoQuery(baseOptions?: Apollo.QueryHookOptions<PedidoQuery, PedidoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PedidoQuery, PedidoQueryVariables>(PedidoDocument, options);
      }
export function usePedidoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PedidoQuery, PedidoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PedidoQuery, PedidoQueryVariables>(PedidoDocument, options);
        }
export type PedidoQueryHookResult = ReturnType<typeof usePedidoQuery>;
export type PedidoLazyQueryHookResult = ReturnType<typeof usePedidoLazyQuery>;
export type PedidoQueryResult = Apollo.QueryResult<PedidoQuery, PedidoQueryVariables>;
export const PedidosDocument = gql`
    query Pedidos($filters: PedidoFiltersInput, $pagination: PaginationArg, $sort: [String] = []) {
  pedidos(filters: $filters, pagination: $pagination, sort: $sort) {
    meta {
      pagination {
        total
      }
    }
    data {
      id
      attributes {
        cargo {
          data {
            id
            attributes {
              nombre
            }
          }
        }
        nombrePedido
        descripcion
        cliente
        hora
        estacionInicio
        estacionFin
        cuantoTardoInicioFin
        tipoIdentificacion
        identificacion
        estado
        fehcaInicio
        fechaFin
        fecha
        stage
        createdAt
        updatedAt
        user {
          data {
            id
            attributes {
              email
              username
              nombreCompleto
            }
          }
        }
        creadoPor {
          data {
            id
            attributes {
              email
              username
              nombreCompleto
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __usePedidosQuery__
 *
 * To run a query within a React component, call `usePedidosQuery` and pass it any options that fit your needs.
 * When your component renders, `usePedidosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePedidosQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *      pagination: // value for 'pagination'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function usePedidosQuery(baseOptions?: Apollo.QueryHookOptions<PedidosQuery, PedidosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PedidosQuery, PedidosQueryVariables>(PedidosDocument, options);
      }
export function usePedidosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PedidosQuery, PedidosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PedidosQuery, PedidosQueryVariables>(PedidosDocument, options);
        }
export type PedidosQueryHookResult = ReturnType<typeof usePedidosQuery>;
export type PedidosLazyQueryHookResult = ReturnType<typeof usePedidosLazyQuery>;
export type PedidosQueryResult = Apollo.QueryResult<PedidosQuery, PedidosQueryVariables>;
export const UsersPermissionsUserDocument = gql`
    query UsersPermissionsUser($usersPermissionsUserId: ID) {
  usersPermissionsUser(id: $usersPermissionsUserId) {
    data {
      attributes {
        username
        enlinea
        email
        cargo {
          data {
            attributes {
              nombre
            }
            id
          }
        }
        nombreCompleto
        Area
        pedidos {
          data {
            attributes {
              nombrePedido
              descripcion
              cliente
              fecha
              hora
              estacionInicio
              estacionFin
              fehcaInicio
              fechaFin
              cuantoTardoInicioFin
              estado
              identificacion
              tipoIdentificacion
              finalizado
            }
            id
          }
        }
        turnos {
          data {
            attributes {
              fin
              inicio
              nombre
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useUsersPermissionsUserQuery__
 *
 * To run a query within a React component, call `useUsersPermissionsUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersPermissionsUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersPermissionsUserQuery({
 *   variables: {
 *      usersPermissionsUserId: // value for 'usersPermissionsUserId'
 *   },
 * });
 */
export function useUsersPermissionsUserQuery(baseOptions?: Apollo.QueryHookOptions<UsersPermissionsUserQuery, UsersPermissionsUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UsersPermissionsUserQuery, UsersPermissionsUserQueryVariables>(UsersPermissionsUserDocument, options);
      }
export function useUsersPermissionsUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UsersPermissionsUserQuery, UsersPermissionsUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UsersPermissionsUserQuery, UsersPermissionsUserQueryVariables>(UsersPermissionsUserDocument, options);
        }
export type UsersPermissionsUserQueryHookResult = ReturnType<typeof useUsersPermissionsUserQuery>;
export type UsersPermissionsUserLazyQueryHookResult = ReturnType<typeof useUsersPermissionsUserLazyQuery>;
export type UsersPermissionsUserQueryResult = Apollo.QueryResult<UsersPermissionsUserQuery, UsersPermissionsUserQueryVariables>;
export const UsersPermissionsUsersDocument = gql`
    query UsersPermissionsUsers($pagination: PaginationArg) {
  usersPermissionsUsers(pagination: $pagination) {
    data {
      attributes {
        username
        enlinea
        email
        provider
        confirmed
        blocked
        cargo {
          data {
            attributes {
              nombre
            }
          }
        }
        nombreCompleto
        Area
        createdAt
        updatedAt
      }
      id
    }
    meta {
      pagination {
        total
      }
    }
  }
}
    `;

/**
 * __useUsersPermissionsUsersQuery__
 *
 * To run a query within a React component, call `useUsersPermissionsUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersPermissionsUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersPermissionsUsersQuery({
 *   variables: {
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useUsersPermissionsUsersQuery(baseOptions?: Apollo.QueryHookOptions<UsersPermissionsUsersQuery, UsersPermissionsUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UsersPermissionsUsersQuery, UsersPermissionsUsersQueryVariables>(UsersPermissionsUsersDocument, options);
      }
export function useUsersPermissionsUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UsersPermissionsUsersQuery, UsersPermissionsUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UsersPermissionsUsersQuery, UsersPermissionsUsersQueryVariables>(UsersPermissionsUsersDocument, options);
        }
export type UsersPermissionsUsersQueryHookResult = ReturnType<typeof useUsersPermissionsUsersQuery>;
export type UsersPermissionsUsersLazyQueryHookResult = ReturnType<typeof useUsersPermissionsUsersLazyQuery>;
export type UsersPermissionsUsersQueryResult = Apollo.QueryResult<UsersPermissionsUsersQuery, UsersPermissionsUsersQueryVariables>;