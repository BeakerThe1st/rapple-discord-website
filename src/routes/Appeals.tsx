import {
  Anchor,
  Button,
  Center,
  Checkbox,
  Container,
  Group,
  Image,
  List,
  Text,
  Textarea,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useNotifications } from "@mantine/notifications";
import { useContext, useState } from "react";
import { FaceId, FaceIdError } from "tabler-icons-react";
import GuildInfoContext from "../context/GuildInfoContext";

const Appeals = () => {
  const [instructionsChecked, setInstructionsChecked] = useState(false);
  const guildInfo = useContext(GuildInfoContext)!;
  return (
    <>
      <Image
        src={guildInfo.iconURL}
        alt="r/Apple Discord Icon"
        classNames={{
          image: "rounded-full mx-auto max-w-[30%] md:max-w-[128px]",
        }}
      />
      <Title align="center" order={1} mt="lg">
        r/Apple Discord Ban Appeals
      </Title>
      <Container
        px="md"
        py="md"
        mt="md"
        className="bg-yellow-200 shadow-lg shadow-yellow-200/50 rounded-lg"
      >
        <Text align="center">
          If you have been banned from the r/Apple Discord Server, you may
          submit a ban appeal below.
        </Text>
        <Text weight={600} align="center">
          Please ensure that you read the instructions below before submitting
          or your appeal will be subject to immediate denial.
        </Text>
      </Container>
      <Center mt="xl">
        <List type="ordered" withPadding size="md">
          <List.Item>
            Locate your Discord User ID. Find instructions on how to do so{" "}
            <Anchor href="https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-">
              here
            </Anchor>
          </List.Item>
          <List.Item>
            Ensure that you are in our{" "}
            <Anchor href="https://discord.gg/v6eVy5AFF8">
              ban appeal server
            </Anchor>
            .
          </List.Item>
          <List.Item>Fill out the ban appeal form below.</List.Item>
        </List>
      </Center>
      <Text align="center" mt="lg" size="md">
        If we accept your appeal, you will be notified within 14 days.
        <br />
        If you do not receive a DM within 14 days, consider your appeal{" "}
        <Text weight={600} component="span">
          denied
        </Text>
        .
      </Text>
      <Center mt="md">
        <Checkbox
          checked={instructionsChecked}
          onChange={(event) =>
            setInstructionsChecked(event.currentTarget.checked)
          }
          {...(instructionsChecked && { disabled: true })}
          label="I have read the above instructions in their entirety."
        />
      </Center>
      <AppealForm disabled={!instructionsChecked} />
    </>
  );
};

interface AppealFormProps {
  disabled: boolean;
}
interface BanAppeal {
  userTag: string;
  userId: string;
  argument: string;
}
const AppealForm = ({ disabled }: AppealFormProps) => {
  const [submitting, setSubmitting] = useState(false);
  if (submitting) {
    disabled = true;
  }
  const notifications = useNotifications();

  const submitBanAppeal = async (appeal: BanAppeal) => {
    const res = await fetch(
      "https://gday-bot-9381aaa86a22.herokuapp.com/ban-appeal",
      {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tag: appeal.userTag,
          id: appeal.userId,
          reason: appeal.argument,
        }),
      }
    );
    const json = await res.json();
    if (res.ok) {
      return json;
    } else {
      throw new Error(json.error);
    }
  };

  const handleSubmit = (values: BanAppeal) => {
    const id = notifications.showNotification({
      title: "Submitting...",
      message: "Submitting your ban appeal.",
      loading: true,
      disallowClose: true,
      autoClose: false,
    });
    setSubmitting(true);
    submitBanAppeal(values)
      .then(() => {
        notifications.updateNotification(id, {
          id,
          color: "green",
          title: "Success!",
          message: "Appeal submitted successfully",
          icon: <FaceId />,
          autoClose: false,
        });
        form.setValues({ userTag: "", userId: "", argument: "" });
      })
      .catch((error) => {
        notifications.updateNotification(id, {
          id,
          color: "red",
          title: "Error!",
          message: error.message,
          icon: <FaceIdError />,
          autoClose: false,
        });
      })
      .finally(() => {
        setSubmitting(false);
      });
  };
  const form = useForm({
    initialValues: {
      userTag: "",
      userId: "",
      argument: "",
    },
    validate: {
      userId: (value) => (/^[0-9]*$/.test(value) ? null : "Invalid user ID"),
    },
  });
  return (
    <Center mt="lg">
      <form
        onSubmit={form.onSubmit(handleSubmit)}
        data-netlify="true"
        name="appeals"
      >
        <Group>
          <TextInput
            disabled={disabled}
            required
            label="Discord ID"
            placeholder="537861332532461579"
            {...form.getInputProps("userId")}
          />
          <TextInput
            required
            disabled={disabled}
            label="Discord Username"
            placeholder="beakerthe1st"
            {...form.getInputProps("userTag")}
          />
        </Group>

        <Textarea
          disabled={disabled}
          mt="sm"
          autosize
          required
          label="Why should you be unbanned?"
          minRows={4}
          {...form.getInputProps("argument")}
        />
        <Group position="right">
          <Button type="submit" mt="sm" disabled={disabled}>
            Submit
          </Button>
        </Group>
      </form>
    </Center>
  );
};

export default Appeals;
