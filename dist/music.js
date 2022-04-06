const ap = new APlayer({
    container: document.getElementById('aplayer'), //播放器容器元素
    fixed: true,
    autoplay: true, //自动播放
    theme: '#FADFA3', //主题色
    loop: 'all', //音频循环播放, 可选值: 'all'全部循环, 'one'单曲循环, 'none'不循环
    order: 'random', //音频循环顺序, 可选值: 'list'列表循环, 'random'随机循环
    preload: 'auto', //预加载，可选值: 'none', 'metadata', 'auto'
    volume: 0.7, //默认音量，请注意播放器会记忆用户设置，用户手动设置音量后默认音量即失效
    mutex: true, //互斥，阻止多个播放器同时播放，当前播放器播放时暂停其他播放器
    listFolded: true, //列表默认折叠
    listMaxHeight: 90, //列表最大高度
    lrcType: 3, //歌词传递方式
    audio: [ //音频信息,包含以下
        {
            name: 'Fragile', //音频名称
            artist: 'DJ Okawari / Celeina Ann', //音频艺术家
            url: 'http://music.163.com/song/media/outer/url?id=1352565898.mp3', //音频外链
            cover: 'Fragile.jpg', //音频封面
        },
        {
            name: 'さかさませかい', //音频名称
            artist: 'Wind Ark', //音频艺术家
            url: 'http://music.163.com/song/media/outer/url?id=668144.mp3', //音频外链
            cover: 'さかさませかい.jpg', //音频封面
        },
        {
            name: 'nightfall (full ver)', //音频名称
            artist: 'ginkiha', //音频艺术家
            url: 'http://music.163.com/song/media/outer/url?id=40729223.mp3', //音频外链
            cover: 'nightfall (full ver).jpg', //音频封面
        },
        {
            name: '私たちの未来', //音频名称
            artist: '中井雅子', //音频艺术家
            url: 'http://music.163.com/song/media/outer/url?id=1357774602.mp3', //音频外链
            cover: '私たちの未来.jpg', //音频封面
        },
        {
            name: '恋心', //音频名称
            artist: '吟', //音频艺术家
            url: 'http://music.163.com/song/media/outer/url?id=435289266.mp3', //音频外链
            cover: '恋心.jpg', //音频封面
        },
        {
            name: 'Heartstrings', //音频名称
            artist: '吟', //音频艺术家
            url: 'http://music.163.com/song/media/outer/url?id=435288265.mp3', //音频外链
            cover: 'Heartstrings.jpg', //音频封面
        },
        {
            name: 'En fermant les yeux', //音频名称
            artist: 'solita', //音频艺术家
            url: 'http://music.163.com/song/media/outer/url?id=477215669.mp3', //音频外链
            cover: 'En fermant les yeux.jpg', //音频封面
        },
        {
            name: 'SPiCa -paid vacation mix-', //音频名称
            artist: 'ちびた / 古川本舗', //音频艺术家
            url: 'http://music.163.com/song/media/outer/url?id=4888191.mp3', //音频外链
            cover: 'SPiCa -paid vacation mix-.jpg', //音频封面
        },
        {
            name: 'City of Tears', //如果只有一首歌，删掉这一块，如有更多歌曲按此格式逐渐往下添加
            artist: 'Christopher Larkin',
            url: 'http://music.163.com/song/media/outer/url?id=1309394495.mp3',
            cover: 'City of Tears.jpg',
        }
    ]
});