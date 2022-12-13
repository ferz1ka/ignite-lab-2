import { FormEvent } from 'react'
import { Button, CheckBox, Heading, TextField, Typography } from '@/components'
import { Envelope, Lock } from 'phosphor-react'
import logo from '/logo.svg'

export function SignIn() {

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    console.log('handleSubmit')

  }
  return (
    <div className='w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100'>
      <header className='flex flex-col items-center'>
        <img src={logo} />
        <Heading size='xxl' className='mt-4 mb-1'>
          Ignite Lab
        </Heading>
        <Typography className='text-gray-400'>
          Faça login e começe a usar!
        </Typography>
      </header>
      <form onSubmit={handleSubmit} className='w-full max-w-[350px] flex flex-col mt-10 mb-8'>
        <label htmlFor='email' className='flex flex-col gap-3'>
          <Typography size='sm' className='font-semibold'>
            Endereço de e-mail
          </Typography>
          <TextField.Root>
            <TextField.Icon>
              <Envelope />
            </TextField.Icon>
            <TextField.Input type='email' id='email' placeholder='Digite o seu e-mail' />
          </TextField.Root>
        </label>
        <label htmlFor='password' className='flex flex-col gap-3 mt-4'>
          <Typography size='sm' className='font-semibold'>
            Sua senha
          </Typography>
          <TextField.Root>
            <TextField.Icon>
              <Lock />
            </TextField.Icon>
            <TextField.Input type='password' id='password' placeholder='*********' />
          </TextField.Root>
        </label>
        <label htmlFor='remember' className='flex items-center gap-2 my-5'>
          <CheckBox id='remember' />
          <Typography size='sm' className='text-gray-400'>Lembrar de mim por 30 dias</Typography>
        </label>

        <Button type='submit'>
          Entrar na plataforma
        </Button>
      </form>

      <footer className='flex flex-col items-center gap-4'>
        <Typography asChild size='sm' className='text-gray-400 underline hover:cursor-pointer hover:text-gray-100'>
          <a href=''>
            Esqueceu sua senha?
          </a>
        </Typography>
        <Typography asChild size='sm' className='text-gray-400 underline hover:cursor-pointer hover:text-gray-100'>
          <a href=''>
            Não possui conta? Crie uma agora!
          </a>
        </Typography>
      </footer>
    </div>
  )
}