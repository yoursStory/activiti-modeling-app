 /*!
 * @license
 * Copyright 2018 Alfresco, Inc. and/or its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Action } from '@ngrx/store';
import { Project, MODEL_TYPE } from 'ama-sdk';

export const SELECT_PROJECT = 'SELECT_PROJECT';
export class SelectProjectAction implements Action {
    readonly type = SELECT_PROJECT;
    constructor(public payload: string) {}
}

export const CLOSE_FILTER = '[App Tree] Close filter';
export class CloseFilterAction implements Action {
    readonly type = CLOSE_FILTER;
    constructor(public filterType: MODEL_TYPE) {}
}

export const GET_PROJECT_ATTEMPT = 'GET_PROJECT_ATTEMPT';
export class GetProjectAttemptAction implements Action {
    readonly type = GET_PROJECT_ATTEMPT;
    constructor(public payload: string) {}
}

export const GET_PROJECT_SUCCESS = 'GET_PROJECT_SUCCESS';
export class GetProjectSuccessAction implements Action {
    readonly type = GET_PROJECT_SUCCESS;
    constructor(public payload: Partial<Project>) {}
}
export interface ExportProjectPayload {
    projectId: string;
    projectName: string;
}
export const EXPORT_PROJECT = 'EXPORT_PROJECT';
export class ExportProjectAction implements Action {
    readonly type = EXPORT_PROJECT;
    constructor(public payload: ExportProjectPayload) {}
}