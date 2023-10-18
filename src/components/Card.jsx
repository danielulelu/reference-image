
import { Heading, Text, Stack, Feature } from '@chakra-ui/react';
// import PropTypes from 'prop-types';

function Description({ title, desc }) {
  return (
    <Stack spacing={8} direction="row">
      <Feature title={title} desc={desc} />
      <Feature
        title="Branches"
        desc="Abstract branches lets you manage, version and document your designs in one place."
      />
      <Feature
        title="Manage your account"
        desc="Configure your account settings, such as your email, profile details and password."
      />
      <Feature
        title="Manage organizations, teams and projects"
        desc="Use Abstract organizations, teams, and projects to organize your people and your work."
      />
      <Feature
        title="Manage billing"
        desc="Change subscriptions and payment details."
      />
      <Feature
        title="Authenticate to Abstract"
        desc="Set up and configure SSO, SCIM, and Just-in-Time provisioning."
      />
      <Feature title="Abstract Support" desc="Get in touch with a human." />
    </Stack>
  );
}

function Card({ title, desc }) {
  return (
    <div>
      <Heading fontSize="xl">{title}</Heading>
      <Text mt={4}>{desc}</Text>
      <Description title={title} desc={desc} />
    </div>
  );
}

export default Card;
