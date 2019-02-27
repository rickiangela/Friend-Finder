var friendsArray = [
	{
		name: 'Ricki',
		photo: 'https://scontent-mia3-2.xx.fbcdn.net/v/t1.0-9/51342617_2061605407262215_858777671453114368_n.jpg?_nc_cat=111&_nc_ht=scontent-mia3-2.xx&oh=0b956d81e3788fdb649aa88c89314d24&oe=5D237FAC',
		scores: [
			'1',
			'5',
			'4',
			'5',
			'4',
			'5',
			'4',
			'4',
			'1',
			'2'
		]
	},
	{
		name: 'Apollo',
		photo: 'https://scontent-mia3-2.xx.fbcdn.net/v/t1.0-9/45144609_10209710328233558_2823532915097337856_n.jpg?_nc_cat=101&_nc_ht=scontent-mia3-2.xx&oh=9eff228dadcd675031dcde874233cf94&oe=5D1C044E',
		scores: [
			'2',
			'4',
			'1',
			'1',
			'1',
			'1',
			'1',
			'2',
			'1',
			'5'
		]
	},
	{
		name: 'Shelbee',
		photo: 'https://scontent-mia3-2.xx.fbcdn.net/v/t1.0-9/18010386_10203308229142169_936041528245911088_n.jpg?_nc_cat=111&_nc_ht=scontent-mia3-2.xx&oh=2660cdeb6da8c547025c2609fbd9cb6a&oe=5D28FF7C',
		scores: [
			'4',
			'3',
			'5',
			'1',
			'1',
			'5',
			'5',
			'1',
			'1',
			'1'
		]
	},
	{
		name: 'Kaylee',
		photo: 'https://scontent-mia3-2.xx.fbcdn.net/v/t1.0-9/52830939_10210637108203815_4194146198606577664_n.jpg?_nc_cat=104&_nc_ht=scontent-mia3-2.xx&oh=bf25ae1f6198956ae426132fa598bae8&oe=5CEAAFF2',
		scores: [
			'5',
			'1',
			'2',
			'1',
			'3',
			'4',
			'1',
			'3',
			'3',
			'4'
		]
	},
	{
		name: 'Cloe',
		photo: 'http://4.bp.blogspot.com/-HTvSYzA-pO4/UgQb4Zh_u0I/AAAAAAAAEuI/XwhtogT_1tA/s1600/3+cute2.jpg',
		scores: [
			'1',
			'1',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'1'
		]
	},
	{
		name: 'Miss. Piggy',
		photo: 'data:image/jpeg;base64,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',
		scores: [
			'1',
			'1',
			'5',
			'1',
			'3',
			'2',
			'5',
			'1',
			'1',
			'5'
		]
	},
	{
		name: 'Beyonce Knowles',
		photo: 'https://specials-images.forbesimg.com/imageserve/59f4e6c24bbe6f37dda1445b/416x416.jpg?background=000000&cropX1=81&cropX2=1997&cropY1=133&cropY2=2049',
		scores: [
			'5',
			'4',
			'4',
			'2',
			'4',
			'4',
			'3',
			'2',
			'3',
			'3'
		]
	},
	{
		name: 'Hayley Kiyoko',
		photo: 'https://www.out.com/sites/out.com/files/2018/03/29/hayleykiyoko-x750.jpg',
		scores: [
			'5',
			'2',
			'3',
			'1',
			'5',
			'1',
			'3',
			'1',
			'1',
			'5'
		]
	},
	{
		name: 'Kermit the Frog',
		photo: 'data:image/jpeg;base64,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',
		scores: [
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5'
		]
	},
	{
		name: 'Elmo',
		photo: 'https://is2-ssl.mzstatic.com/image/thumb/Purple118/v4/b4/3e/d2/b43ed21a-f131-784f-559d-b0beb75f4f4b/pr_source.png/320x0w.jpg',
		scores: [
			'1',
			'1',
			'1',
			'1',
			'1',
			'1',
			'1',
			'1',
			'1',
			'1'
		]
	}
];

module.exports = friendsArray;
