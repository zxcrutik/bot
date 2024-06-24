import { Telegraf, Markup } from 'telegraf'
import { message } from 'telegraf/filters'

const token = '6799316143:AAH9rHIoXPrUOz5qJe7XC6ibGgAA5B0G3g0'
const webAppUrl = 'https://zxcrutik.github.io/bot/'

const bot = new Telegraf(token)

bot.command('start', (ctx) => {
  ctx.reply(
    'Добро пожаловать! Нажмите на кнопку ниже, чтобы запустить приложение',
    Markup.keyboard([
      Markup.button.webApp('Отправить сообщение', `${webAppUrl}/feedback`),
    ])
  )
})

bot.launch()