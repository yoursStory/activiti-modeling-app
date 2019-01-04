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

import { ApplicationTreeState, INITIAL_APPLICATION_TREE_STATE } from './application-tree.state';
import { ApplicationDataState, INITIAL_APPLICATION_DATA_STATE } from './application-data.state';

export interface ApplicationEditorState {
    application: ApplicationDataState;
    tree: ApplicationTreeState;
}

export const INITIAL_APPLICATION_EDITOR_STATE: ApplicationEditorState = {
    application: INITIAL_APPLICATION_DATA_STATE,
    tree: INITIAL_APPLICATION_TREE_STATE
};