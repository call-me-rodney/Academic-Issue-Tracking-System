const Students_profile = (props) => {
  return (
    <div>
      <div class="container">
        <h2 class="profile-header">My Bio Data</h2>
        <p>Name</p>
        <div class="profile-box">
          <div class="profile-left">
            <h3>Ishmam Ahasan Samin</h3>
            <p>
              <strong>Student ID:</strong> 321000001
            </p>
            <p>
              <strong>Class:</strong> 4
            </p>
            <p>
              <strong>Section:</strong> A
            </p>
          </div>
          <div class="profile-right">
            <h3>📋 General Information</h3>
            <table>
              <tr>
                <td>
                  <strong>Email</strong>
                </td>
                <td>: sample@gmail.com</td>
              </tr>
              <tr>
                <td>
                  <strong>Telephone Number</strong>
                </td>
                <td>: 0783567878</td>
              </tr>
              <tr>
                <td>
                  <strong>Gender</strong>
                </td>
                <td>: Male</td>
              </tr>
              <tr>
                <td>
                  <strong>Religion</strong>
                </td>
                <td>: Catholic</td>
              </tr>
              <tr>
                <td>
                  <strong>Nationality</strong>
                </td>
                <td>: Uganda</td>
              </tr>
            </table>
          </div>
        </div>
        <div class="info-box">
          <h3>📋 Other Information</h3>
              </div>
      </div>
    </div>
  )
}

Students_profile.propTypes = {}

export default Students_profile

