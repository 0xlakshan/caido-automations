/**
 * @param {HttpInput} input
 * @param {SDK} sdk
 */
export async function run({ request, response }, sdk) {
    if (request) {
        const host = request.getHost();
        const path = request.getPath();
        const method = request.getMethod();

        // 1. Define your organizational metadata
        // You can also programmatically change these based on the host/path!
        // const appName = host.replace("www.", ""); 
        // const title = `[${method}] ${path}`;
        const uniqueKey = `${host}-${method}-${path}`;

        // 2. Programmatically generate the finding in bulk
        await sdk.findings.create({
            title: "ai-agents/dashboard/home - Build AI Agent For Email", // Feature
            reporter: "ai-agents/dashboard/home", // Route
            description: ``,
            // dedupeKey: uniqueKey, // Keeps your findings clean if you run it twice
            request: request
        });
    }
}
