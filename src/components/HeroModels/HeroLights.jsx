
const HeroLights = () => {
  return (
    <>
        <spotLight position={[3,2,7]} intensity={80} penumbra= {0.5} color= "white">
        </spotLight>
        <pointLight position = {[1, 1, 0]} intensity = {50} color = "#720b97"></pointLight>
        <pointLight position = {[1, 2, -2]} intensity = {20} color = "red"></pointLight>
    </>
  )
}

export default HeroLights