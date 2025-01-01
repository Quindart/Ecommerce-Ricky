import React from 'react'
import TextField from '../../components/TextField'
import { useForm } from 'react-hook-form'
import Button from '../../components/Button'

const EditAccount = () => {
  const { register } = useForm({
    mode: 'onBlur',
  })

  return (
    <div>
      <form style={{ maxWidth: 430 }}>
        <div>
          <TextField
            style={{ marginBottom: 10 }}
            label="Fist name *"
            type="form"
            disabled={false}
            color="blue"
            id="fistName"
            name="fistName"
            register={register}
          />
          <TextField
            style={{ marginBottom: 10 }}
            label="Last name *"
            type="form"
            disabled={false}
            color="blue"
            id="lastName"
            name="lastName"
            register={register}
          />
          <TextField
            style={{ marginBottom: 10 }}
            label="Display name*"
            type="form"
            disabled={false}
            color="blue"
            id="displayName"
            name="displayName"
            register={register}
          />
          <TextField
            style={{ marginBottom: 10 }}
            label="Email address *"
            type="form"
            disabled={false}
            color="blue"
            id="emailAddress"
            name="emailAddress"
            register={register}
          />
        </div>
        <div style={{ marginTop: 45 }}>
          <div
            style={{
              marginBottom: 20,
              fontWeight: 500,
              fontSize: 22,
              lineHeight: '28px',
              color: '#0052B1',
            }}
          >
            Password change
          </div>
          <TextField
            style={{ marginBottom: 10 }}
            label="Current password (leave blank to leave unchanged)"
            type="password"
            disabled={false}
            color="blue"
            id="currentPassword"
            name="currentPassword"
            register={register}
          />
          <TextField
            style={{ marginBottom: 10 }}
            label="New password (leave blank to leave unchanged)"
            type="password"
            disabled={false}
            color="blue"
            id="newPassword"
            name="newPassword"
            register={register}
          />
          <TextField
            style={{ marginBottom: 10 }}
            label="Confirm new password"
            type="password"
            disabled={false}
            color="blue"
            id="confirmPassword"
            name="confirmPassword"
            register={register}
          />
        </div>
        <Button
          style={{ marginTop: 30 }}
          htmlType="link"
          type="primary"
          url="/"
        >
          save changes
        </Button>
      </form>
    </div>
  )
}

export default EditAccount
