-cmd install owner.js const axios = require('axios');
const fs = require('fs');
const path = require('path');

module.exports = {
	config: {
		name: "owner",
		author: "ALAMIN",
		role: 0,
		shortDescription: "info and my owner the cmd",
		longDescription: "",
		category: "admin",
		guide: "{pn}"
	},

	onStart: async function ({ api, event }) {
		try {
			const ownerInfo = {
				name: 'MD  ALAMIN ',
				gender: 'Male',
				github: 'privet',
				Tiktok: 'No',
				Relationship: 'single',
				bio: 'I Love my mother',
				messenger: 'https://www.facebook.com/profile.php?id=61558651089120&mibextid=JRoKGi'
			};

			const bold = 'http://g-v1.onrender.com/lxdy9F_CT.jpg';
			const tmpFolderPath = path.join(__dirname, 'tmp');

			if (!fs.existsSync(tmpFolderPath)) {
				fs.mkdirSync(tmpFolderPath);
			}

			const imgResponse = await axios.get(bold, { responseType: 'arraybuffer' });
			const imgPath = path.join(tmpFolderPath, 'owner_img.jpeg');

			fs.writeFileSync(imgPath, Buffer.from(imgResponse.data, 'binary'));

			const response = `╭─────❁\n│  𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢  \n│
│Name: ${ownerInfo.name}
│gender : ${ownerInfo.gender}
│Relationship :${ownerInfo.Relationship}
│Tiktok : ${ownerInfo.Tiktok}
│Github :${ownerInfo.github}
│bio : ${ownerInfo.bio}
│facebook: ${ownerInfo.messenger}\n╰────────────❁`;

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
