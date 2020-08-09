const Discord = require('discord.js');
const requi = require('./videos');
const client = new Discord.Client();
const BOT_TOKEN = 'NzQxODExMDYxMTgyODI0NTgw.Xy8_Yw.wXi0-W80ujPx3EUx8Vb-EMyHadA';

const janken = ["出ない～出ないんですねこれが出ないんだなあ～","ﾀﾀﾅｲ!","出たー出た！出たぁ..."]
const hikagaos = ["https://i.imgur.com/s779CIq.gif","https://i.imgur.com/MlLATux.gif","https://i.imgur.com/IVWlELD.gif"]
let onakintimer_name = [];
let onakintimer_time = [];

let jankeka
let rep = false
let hikagao = false

let randomhikakin = requi.vide;
let resachara = requi.resa;
let hikasin = requi.sinsu;

let now;
let oldsecond;
let sa_second;
let sa_minute;
let idx;


client.on('ready', () => {
    client.user.setActivity('ブンブンハローRED♪TUBE(type .help)')
    
});

client.on('message', msg => {
    if (msg.author.id === client.user.id) {
        return;
    }
    if(msg.content.match(".ht")){
        let msage = msg.content.slice(4)
        msage = msage.replace('tn','tntn')
        msg.channel.send(msage)
    }
    if(msg.content === '.ピーチは抜ける'){
        let peach = Math.floor( Math.random() * 191 ) ;
        msg.channel.send({ files: ['./peachimages/peach ('+peach+').jpg'] })
    }
    if(msg.content === '.help'){
        msg.reply('');
    }
    if(msg.content === '.ヒカ顔じゃんけん'){
        msg.reply('ヒカ顔じゃんけんじゃんけんじゃんけんじゃんけん♪');
        hikagao = true;
    }
    if(msg.content === '.start'){
        msg.channel.send('ブンブンハローRED♪TUBE　どうもオナキンです\n.help でコマンド一覧を送信しますカキ')
    }
    if(msg.content === '.help'){
        msg.channel.send("ヘルプはこっちーら♪\nhttp://nbatotu.github.io/t/blog/how-to-use-onakin")
    }
    

    if(msg.content === '.出た！'){
        idx = onakintimer_name.indexOf(msg.author.id)
        if(idx > -1){
            now = new Date();
            oldsecond = new Date(onakintimer_time[idx]);
            sa_second = now.getSeconds() - oldsecond.getSeconds();
            sa_minute = now.getMinutes() - oldsecond.getMinutes();
            sa_hour = now.getHours() - oldsecond.getHours();
            if(sa_second < 0){
                sa_minute -= 1;
                sa_second = sa_second + 60

            }
            if(sa_minute < 0){
                sa_hour -= 1;
                sa_minute = sa_minute + 60
            }
            msg.channel.send("出た！出た！やっちまった！ 記録は" + ('00' + String(sa_hour)).slice(-2) + '時' + ('00' + String(sa_minute)).slice(-2) + '分' +  ('00' + String(sa_second)).slice(-2) + '秒！');
            onakintimer_time[idx] = '';
            onakintimer_name[idx] = '';
            
        }else{
            msg.reply('まだオナ禁を初めてナイTNTNゲ～ル♪')
        }
    }
    if(msg.content === '.オナ禁タイマー'){
        msg.reply("レッツオナ禁やぁりましょう！(:stopwatch:タイマーを開始しました)");
        onakintimer_name.push(msg.author.id);
        onakintimer_time.push(new Date())
    }
    if(msg.content === '.getusid'){
        msg.reply(msg.author.id);
    }
    if(msg.content === '.パーの顔' && hikagao == true){
        jankeka = Math.floor( Math.random() * 3 ) ;
        switch(jankeka){
            case 0:
                msg.reply(hikagaos[jankeka] + "\nあなたの勝ち！");
                break;
            case 1:
                msg.reply(hikagaos[jankeka] + "\nオナキンの勝ち！");
                break;
            case 2:
                msg.reply(hikagaos[jankeka] + "\nあいこ！");
                break;
        }
        hikagao = false
    }
    if(msg.content === '.チョキの顔' && hikagao == true){
        jankeka = Math.floor( Math.random() * 3 ) ;
        switch(jankeka){
            case 2:
                msg.reply(hikagaos[jankeka] + "\nあなたの勝ち！");
                break;
            case 0:
                msg.reply(hikagaos[jankeka] + "\nオナキンの勝ち！");
                break;
            case 1:
                msg.reply(hikagaos[jankeka] + "\nあいこ！");
                break;
        }
        hikagao = false
    }
        if(msg.content === '.グーの顔' && hikagao == true){
        jankeka = Math.floor( Math.random() * 3 ) ;
        switch(jankeka){
            case 1:
                msg.reply(hikagaos[jankeka] + "\nあなたの勝ち！");
                break;
            case 2:
                msg.reply(hikagaos[jankeka] + "\nオナキンの勝ち！");
                break;
            case 0:
                msg.reply(hikagaos[jankeka] + "\nあいこ！");
                break;
        }
        hikagao = false
    }
    if(msg.content === '.randomgaiden'){
        let random = Math.floor( Math.random() * randomhikakin.length - 1)
        msg.reply('見ましょう！\n' + randomhikakin[random])
        console.log('aa')
    }
    if(msg.content === '.レさキャラ図鑑'){
        let random = Math.floor(Math.random() * resachara.length - 1)
        msg.channel.send(resachara[random])
    }
    if(msg.content === '.なんか言え糞虫'){
        msg.reply('は？TNTNぶった斬りま～す')
        console.log('aa')
    }
    if(msg.content === '.イきます'){
        msg.reply('出たー出た！出たぁ...')
    }
    //a
    if (msg.content === '.ヒカキンTVでケツの穴とか言ったことあんまないけど') {
        msg.reply('https://cdn.discordapp.com/attachments/594551483710570497/709740582532284486/7q0Z8Q2vr2N2C221_1.mp4');
        rep = false
    }
    if(msg.content.match('.ヒカマニ進数')){
        let random = Math.floor(Math.random() * resachara.length - 1)
        let tani = msg.content.slice(8)
        msg.reply(hikasin[random]+tani)
    }
    if (msg.content === '.じゃんけんタイム'){
        msg.reply('行きますよ～！最初はブンブンじゃんけん！');
        jankeka = Math.floor( Math.random() * 3 ) ;
        rep = true
    }
    if (msg.content === '.出たー出た！出たぁ...' || msg.content === '.出たー！' && rep == true){
        
        switch(jankeka){
            case 0:
                msg.reply(janken[jankeka] + "\nあなたの勝ち！");
                break;
            case 1:
                msg.reply(janken[jankeka] + "\nオナキンの勝ち！");
                break;
            case 2:
                msg.reply(janken[jankeka] + "\nあいこ！");
                break;
        }
        
        rep = false
    }
    if (msg.content === '.ﾀﾀﾅｲ!' && rep == true){
        
        switch(jankeka){
            case 2:
                msg.reply(janken[jankeka] + "\nあなたの勝ち！");
                break;
            case 0:
                msg.reply(janken[jankeka] + "\nオナキンの勝ち！");
                break;
            case 1:
                msg.reply(janken[jankeka] + "\nあいこ！");
                break;
        }
        
        rep = false
    }
    if (msg.content === '.出ない～出ないんですねこれが出ないんだなあ～'|| msg.content === '.出ない～！'  && rep == true){
        
        switch(jankeka){
            case 1:
                msg.reply(janken[jankeka] + "\nあなたの勝ち！");
                break;
            case 2:
                msg.reply(janken[jankeka] + "\nオナキンの勝ち！");
                break;
            case 0:
                msg.reply(janken[jankeka] + "\nあいこ！");
                break;
        }
        
        rep = false
    }
    
});

client.login(BOT_TOKEN);