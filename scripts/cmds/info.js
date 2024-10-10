-cmd install info.js const axios = require('axios');
const fs = require('fs');
const path = require('path');

module.exports = {
	config: {
		name: "info",
		author: "ncs",
		role: 0,
		shortDescription: "info and my owner the cmd",
		longDescription: "",
		category: "admin",
		guide: "{pn}"
	},

	onStart: async function ({ api, event }) {
		try {
			const ownerInfo = {
				name: '𝗔𝗟𝗔𝗠𝗜𝗡',
				botname: 'Sofia AI',
				gender: 'Male',
				Tiktok: 'prince12official',
				Relationship: 'single',
				bio: 'I Love my Mom',
				facebook: 'https://www.facebook.com/profile.php?id=61558651089120'
			};

			const bold =
'http://g-v1.onrender.com/Sz3WPEqXH.jpg';
			const tmpFolderPath = path.join(__dirname, 'tmp');

			if (!fs.existsSync(tmpFolderPath)) {
				fs.mkdirSync(tmpFolderPath);
			}

			const imgResponse = await axios.get(bold, { responseType: 'arraybuffer' });
			const imgPath = path.join(tmpFolderPath, 'owner_img.jpeg');

			fs.writeFileSync(imgPath, Buffer.from(imgResponse.data, 'binary'));

			const response = `╭─────❁\n | 𝗔𝗟𝗔𝗠𝗜𝗡  𝗜𝗡𝗙𝗢-🍁  \n│
│Name: ${ownerInfo.name}
│botname : ${ownerInfo.botname}
│gender : ${ownerInfo.gender}
│Relationship :${ownerInfo.Relationship}
│Tiktok : ${ownerInfo.Tiktok}
│bio : ${ownerInfo.bio}
│facebook : ${ownerInfo.facebook}\n╰────────────❁`;

			await api.sendMessage({
				body: response,
				attachment: fs.createReadStream(imgPath)
			}, event.threadID, event.messageID);

			fs.unlinkSync(imgPath);

			api.setMessageReaction('🐔', event.messageID, (err) => {}, true);
		} catch (error) {
			console.error('Error in ownerinfo command:', error);
			return api.sendMessage('An error occurred while processing the command.', event.threadID);
		}
	}
};
