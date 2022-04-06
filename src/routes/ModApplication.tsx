import {
  Title,
  Container,
  Image,
  TextInput,
  NativeSelect,
  NumberInput,
  Textarea,
  Select,
  Button,
  Text,
} from "@mantine/core";
import { useHover } from "@mantine/hooks";
import { useNavigate } from "react-router-dom";
const ModApplication = () => {
  const navigate = useNavigate();
  const { hovered, ref } = useHover();
  return (
    <div className="h-screen w-screen bg-gradient-to-r from-black to-orange-600 absolute top-0 left-0 pt-10">
      <Container className="bg-yellow-400 rounded-full">
        <Image src="https://i.imgur.com/4OabMZh.png" />
      </Container>
      <Container className="mt-10">
        <form
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            window.location.href = "https://youtu.be/dQw4w9WgXcQ";
          }}
        >
          <NumberInput
            label="Your Discord ID"
            classNames={{ label: "text-white font-serif bg-black text-xl" }}
            size="xl"
            parser={(value) => value?.replace(/\$\s?|(,*)/g, "")}
            formatter={(value) =>
              !Number.isNaN(parseFloat(value ?? "12"))
                ? `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                : "$ "
            }
            required
          />
          <Textarea
            className="mt-4"
            classNames={{ label: "text-white font-serif bg-black text-4xl" }}
            placeholder="Your application"
            label="Your application"
            required
          />
          <Select
            label="Which one of the following do you most identify as"
            classNames={{ label: "text-green-600" }}
            placeholder="Pick one"
            data={[
              {
                value: "norwegian",
                label: "Norwegian",
              },
              {
                value: "australian",
                label: "Australian",
              },
            ]}
            required
          />
          <Button
            // @ts-ignore
            ref={ref}
            type="submit"
            color="red"
            className={`font-mono text-green-600 mt-40 absolute bottom-24 ${
              hovered ? "right-24" : "right-56"
            }`}
          >
            Submit Application
          </Button>
        </form>
      </Container>
      <Text
        className="text-white bg-black font-serif absolute bottom-0 left-0"
        onClick={() => {
          navigate("/");
        }}
      >
        Leave this shithole
      </Text>
    </div>
  );
};

export default ModApplication;
