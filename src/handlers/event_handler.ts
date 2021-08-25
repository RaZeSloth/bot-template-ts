import * as fs from "fs";
import path from "path";
export default async(client, Discord) => {
    const load_dir = async(dirs) => {
        const event_files = fs.readdirSync(path.resolve(__dirname,`../events/${dirs}`)).filter(file => file.endsWith('.js'));



        for await(const file of event_files) {
            const event = await import(`../events/${dirs}/${file}`);
            const event_name = file.split('.')[0];
            client.on(event_name, event.bind(null, Discord, client))

        }
    }
    ['client', 'guild'].forEach(e => load_dir(e));
}