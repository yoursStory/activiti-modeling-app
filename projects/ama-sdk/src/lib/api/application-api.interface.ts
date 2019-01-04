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


import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Application } from './types';

@Injectable()
export abstract class ApplicationApi {
    public abstract create(application: Partial<Application>): Observable<Application>;
    public abstract get(applicationId: string): Observable<Application>;
    public abstract update(applicationId: string, application: Partial<Application>): Observable<Application>;
    public abstract delete(applicationId: string): Observable<void>;

    public abstract import(file: File):  Observable<any>;
    public abstract export(applicationId: string): Observable<Blob>;
    public abstract getAll(): Observable<Application[]>;
}