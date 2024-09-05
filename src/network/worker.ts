/* eslint-disable no-restricted-globals */
self.onmessage = (e: any) => {

    // @ts-ignore
    let output = '';
    const originalConsoleLog = console.log;

    console.log = function (...args) {
        output += args.join(' ') + '\n';
    };

    const response = { error: "", output: "" }
    try {

        // eslint-disable-next-line no-new-func
        new Function(e.data)();
        response.output = output?.toString()

    } catch (error: any) {
        response.error = `Error: ${error.message}`
    } finally {
        console.log = originalConsoleLog;
    }

    self.postMessage(JSON.stringify(response))

};

export { };