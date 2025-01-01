const Banners = () => {
    const bannerInfo = [
        {
            header: "New Cat Food",
            subheader: "Fresh and Tasty"
        }
    ];

    console.log(bannerInfo[0].header);

  return <>
    <section>
        <div className="container">
            <div className="row row-cols-lg-4 row-cols-sm-2 row-cols-1">
                <div className='col'>
                    Item
                </div>
                <div className='col'>
                    Item
                </div>
                <div className='col'>
                    Item
                </div>
                <div className='col'>
                    Item
                </div>
            </div>
        </div>
    </section>
  </>
}
export default Banners
