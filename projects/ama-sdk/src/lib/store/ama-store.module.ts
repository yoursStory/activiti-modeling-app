 /*!
 * @license
 * Copyright 2019 Alfresco, Inc. and/or its affiliates.
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

import { NgModule, ModuleWithProviders } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { ENTITIES_REDUCER_TOKEN, ENTITY_REDUCERS_TOKEN, entityReducerFactory } from './entities';

/*
    Experimental: It would be better to use it instead of the

    StoreModule.forFeature('entities', ENTITIES_REDUCER_TOKEN)
    and
    provideEntity({ uis: uiEntitiesReducer })

    in Editor module uis

    But when using it, Angular error is thrown:
    Function calls are not supported in decorators but, ...
*/
@NgModule({
    imports: [ StoreModule.forFeature('entities', ENTITIES_REDUCER_TOKEN), ]
})
export class AmaStoreModule {
    static registerEntity(entityName: string, entityReducer): ModuleWithProviders {
        const entityReducerProvider = { [entityName]: entityReducer };
        return {
            ngModule: AmaStoreModule,
            providers: [
                { provide: ENTITY_REDUCERS_TOKEN, useValue: entityReducerProvider, multi: true },
                { provide: ENTITIES_REDUCER_TOKEN, deps: [ ENTITY_REDUCERS_TOKEN ], useFactory: entityReducerFactory }
            ]
        };
    }
}
