export const SocialMediaButtons = () => {

  const socialMediaButtons = [
    require("../assets/fb.png"),
    require("../assets/insta.png"),
    require("../assets/twitter.png"),
    require("../assets/youtube.png"),
  ];

  return (
    <div className="px-2">
      <h1 className="pl-2 py-4 lg:text-xl font-semibold">SocialMediaButtons</h1>
      <div className="grid grid-cols-4 ml-4 sm:ml-0">
        {socialMediaButtons?.map((item, index) => (
          <div key={index}>
            <img className="cursor-pointer" src={item} alt="image" />
          </div>
        ))}
      </div>
    </div>
  );
};
