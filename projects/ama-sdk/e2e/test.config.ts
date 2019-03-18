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

import { TestConfig } from './test.config.interface';
require('dotenv').config();

const env = process.env;

export const testConfig: TestConfig = {
    main: {
        default_timeout: parseInt(env.DEFAULT_TIMEOUT, 10) || 20000,
        presence_timeout: parseInt(env.PRESENCE_TIMEOUT, 10) || 60000,
        rootPath: __dirname
    },
    ama: {
        url: env.E2E_HOST || 'http://localhost',
        port: env.E2E_PORT || '4100',
        backendConfig: {
            authType: 'OAUTH',
            oauth2: {
                'host': 'http://localhost:4100/auth',
                'clientId': 'activiti',
                'scope': 'openid',
                'secret': '',
                'implicitFlow': true,
                'silentLogin': false,
                'redirectUri': '/',
                'redirectUriLogout': '/login'
            },
            bpmHost: 'http://localhost:4100/api'
        },
        user: env.E2E_USERNAME,
        password: env.E2E_PASSWORD,
        unauthorized_user: env.E2E_UNAUTHORIZED_USER,
        unauthorized_user_password: env.E2E_UNAUTHORIZED_USER_PASSWORD,
        appTitle: 'Activiti Modeling Application'
    }
};
