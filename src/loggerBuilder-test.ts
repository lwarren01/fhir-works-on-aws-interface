import { makeLogger } from './loggerBuilder';

describe('test-logs', () => {
    test('test logger builder', () => {
        const logger = makeLogger(
            {
                component: 'dummy',
            },
            'error',
        );

        logger.error('I am an error', 'jhgfuh { msg: }');
    });
});
